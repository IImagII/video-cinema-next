import { getContentType } from 'api/api.helpers'
import { getAuthUrl } from 'config/api.config'
import Cookies from 'js-cookie'

import { axiosClassic } from '../../api/interseptors'

import { IAuthResponse } from './../../store/user/user.interface'
import { removeTokenStorage, saveToStorage } from './auth.helper'

export const AuthService = {
  // пишем функцию регитсрации
  async register(email: string, password: string) {
    const { data } = await axiosClassic.post<IAuthResponse>(
      getAuthUrl('/register'),
      {
        email,
        password
      }
    )

    if (data.accessToken) saveToStorage(data)

    return data
  },

  //пишем функцию авторизации
  async login(email: string, password: string) {
    const { data } = await axiosClassic.post<IAuthResponse>(
      getAuthUrl('/login'),
      {
        email,
        password
      }
    )

    if (data.accessToken) saveToStorage(data)

    return data
  },

  //функция выхода из аккаунда
  async logout() {
    removeTokenStorage()
    localStorage.removeItem('user')
  },

  //функция получения нового токена если старый токен устарел
  async getNewTokens() {
    const refreshToken = Cookies.get('refreshToken')
    //запрос на перезапись токена
    const { data } = await axiosClassic.post<IAuthResponse>(
      getAuthUrl('/login/access-token'),
      { refreshToken },
      //туту точно указываем что получаем json
      { headers: getContentType() }
    )

    if (data.accessToken) saveToStorage(data)

    return data
  }
}
