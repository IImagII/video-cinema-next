import { IUser } from '@/shared/types/user.types'

export interface IUserState {
  email: string
  isAdmin: boolean
}

//типизация для самого токена с помощью которого мы делалем авторизацию
export interface ITokens {
  accessToken: string //тут представлено два токена первцйдля всех запросов
  refreshToken: string // второй токен нужкн если первый токен уже не будет действующим
}

export interface IInitialState {
  user: IUserState | null
  isLoading: boolean // чтобы мы понимали когда идет загрузка
}

export interface IEmailPassword {
  email: string
  password: string
}

export interface IAuthResponse extends ITokens {
  user: IUser & { isAdmin: boolean }
}
