import { TypedUseSelectorHook, useSelector } from 'react-redux'

import { TypeRootState } from '../store/store'

//типизация selector теперь мы можемиспользховать useSelector через свой useTypedSelector
export const useTypedSelector: TypedUseSelectorHook<TypeRootState> = useSelector
/**потом он используется в хуке useAuth где мы из selector получаем сразу наше
 * состояние авторизацуии пользваотеля */
