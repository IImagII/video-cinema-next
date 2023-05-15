import Cookies from 'js-cookie'

import { IAuthResponse, ITokens } from './../../store/user/user.interface'

// функция которая занимается добавлением в cookies в нашем случае токена
export const saveTokensStorageCookies = (data: ITokens) => {
  Cookies.set('accessToken', data.accessToken)
  Cookies.set('refreshToken', data.refreshToken)
}

//функция добавлени в localStorage
export const saveToStorage = (data: IAuthResponse) => {
  saveTokensStorageCookies(data)
  localStorage.setItem('user', JSON.stringify(data.user))
}

//удаление cookies
export const removeTokenStorage = () => {
  Cookies.remove('accessToken')
  Cookies.remove('refreshToken')
}
