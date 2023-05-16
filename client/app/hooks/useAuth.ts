import { useTypedSelector } from './useTypedSelectors'

//вспомогательный хук куоторый сразу получает состояние авторизации поьзователя
export const useAuth = () => useTypedSelector((state) => state.user)
