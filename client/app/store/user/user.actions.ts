import { createAsyncThunk } from '@reduxjs/toolkit'
import { toastr } from 'react-redux-toastr'

import { AuthService } from '@/services/auth/auth.service'

import { toastError } from '@/utils/toast-error'

import { errorCatch } from '../../utils/toast-error'

import { IAuthResponse, IEmailPassword } from './user.interface'

//делаем запрос на регистрацию
export const register = createAsyncThunk<IAuthResponse, IEmailPassword>(
  /**первый дженерик показывает чтоы вернет нам запрос с сервера  у нас это IAuthResponse
   * IEmailPassword - это типизация того что мы передаем в запрос
   */
  'auth/register',
  async ({ email, password }, thunkApi) => {
    try {
      const response = await AuthService.register(email, password)
      toastr.success('Registration', 'Регситация успешна')

      return response
    } catch (err) {
      //сюда прописывавем кастомную функцию коотрая будет удобно выводить ошибку
      toastError(err)

      return thunkApi.rejectWithValue(err)
    }
  }
)

//делаем запрос на авторизацию
export const login = createAsyncThunk<IAuthResponse, IEmailPassword>(
  /**первый дженерик показывает чтоы вернет нам запрос с сервера  у нас это IAuthResponse
   * IEmailPassword - это типизация того что мы передаем в запрос
   */
  'auth/login',
  async ({ email, password }, thunkApi) => {
    try {
      const response = await AuthService.login(email, password)
      toastr.success('Login', 'Авторизация успешна')

      return response
    } catch (err) {
      //сюда прописывавем кастомную функцию коотрая будет удобно выводить ошибку
      toastError(err)

      return thunkApi.rejectWithValue(err)
    }
  }
)

//делаем запрос на выход их аккаунта
export const logout = createAsyncThunk('auth/logout', async () => {
  await AuthService.logout()
})

//делаем запрос на проверку данных при первом заходе в приложение
export const checkAuth = createAsyncThunk<IAuthResponse>(
  /**первый дженерик показывает чтоы вернет нам запрос с сервера  у нас это IAuthResponse
   * IEmailPassword - это типизация того что мы передаем в запрос
   */
  'auth/check-auth',
  async (_, thunkApi) => {
    try {
      const response = await AuthService.getNewTokens()

      return response
    } catch (err) {
      /**тут мы пишем проуерку специально чтобы конкретно знать какая ошика к нам
       *  пришла и если это ошибка по токену то должны выводить особое сообщение */
      if (errorCatch(err) === 'jwt expired') {
        toastr.error(
          'Logout',
          'Ваша авторизация закончилась авотризщируйтесь снова'
        )
        thunkApi.dispatch(logout())
      }

      return thunkApi.rejectWithValue(err)
    }
  }
)
