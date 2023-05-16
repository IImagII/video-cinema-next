/**это нужно для того чтобы сделать два axios то есть две разновидности  axios*/
import axios from 'axios'
import { API_URL_BASE } from 'config/api.config'
import Cookies from 'js-cookie'

import { removeTokenStorage } from '@/services/auth/auth.helper'
import { AuthService } from '@/services/auth/auth.service'

import { errorCatch } from '@/utils/toast-error'

/** 1- вариант запроса без ничего авторизация к нему не предствалена */
export const axiosClassic = axios.create({
  baseURL: API_URL_BASE,
  headers: {
    'Content-Type': 'application/json'
  }
})

//создам наши interceptors
//сначало создаем просто болванку
export const instance = axios.create({
  baseURL: API_URL_BASE,
  headers: {
    'Content-Type': 'application/json'
  }
})

/**тут уже конкретезируем что нам надо в нашем случае мы будем проверять наличие токена и
 * если он есть прикреплять его если нам нужен доступ к страницам которым
 * нужна авторизация*/
instance.interceptors.request.use((config) => {
  const accessToken = Cookies.get('accessToken') //проверяем есть ли токен вообще

  if (config.headers && accessToken)
    config.headers.Authorization = `Bearer ${accessToken}`

  return config
})

/**тут логика будет такая что мы будем проверять ошибки которые у насесть и
 *  если ошибка будет что токен у нас устарел мы просто отправим новый запрос на
 *  получение токена и поменям его*/
instance.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalRequest = error.config

    /**401 - именно статус что пользователь не авторизирован
     * проверяем ошибки и ищем ту которая для нас необходима чтобы сделать последующие дествия
     */
    if (
      (error.response.status === 401 ||
        //errorCatch - это мы смотрим сообщение о ошибке
        errorCatch(error) === 'jwt expired' ||
        'jwt must be provided') &&
      error.config &&
      /**_isRetry - это мы сами устанавливаем чтобы повторно не потравлялся один
       * и тот же токен
       * _ - означает что мы сами задали эту переменную*/
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true
      try {
        /**тут мы делаем запрос на получение нового токена если у нас предыдущие
         * условия выполняются*/
        await AuthService.getNewTokens()

        //далее обновляем наш токен
        return instance.request(originalRequest)
      } catch (error) {
        if (errorCatch(error) === 'jwt expired') removeTokenStorage()
      }
    }
    throw error
  }
)

export default instance
