import Cookies from 'js-cookie'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { FC, PropsWithChildren, useEffect } from 'react'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'

import { TypeComponentAuthFields } from '@/shared/types/auth.types'

//тут реализовываем динамический импорт встроенный в next
// ssr: false - мы показываем что наш компонент загрузиться только на клиентской части
//в нашем случае мы таким образомипортируем компонент Checkrole.tsx
const DynamicCheckRole = dynamic(() => import('./CheckRole'), { ssr: false })

//компонент который будет какбы оборачивать страницу и давай соответствующие права для пользователя
const AuthProvider: FC<PropsWithChildren<TypeComponentAuthFields>> = ({
  children,
  Component: { isOnlyAdmin, isOnlyUser }
}) => {
  const { user } = useAuth()

  const { logout, checkAuth } = useActions() // это кастомный хук запросов типа dispatch(logout())

  const { pathname } = useRouter() //для выяаления пути

  //при первой рендеринге проверяем наличие токена
  useEffect(() => {
    const accessToken = Cookies.get('accessToken') // проверяем а есть ли токен

    if (accessToken) checkAuth() // обращаемся к asyncThunk и соотвественно делаем запрос для store
  }, [])

  //проверка при переходе на другую страницу если у нас отсутствует refreshToken то мы вызодим из системы
  useEffect(() => {
    const refreshToken = Cookies.get('refreshToken')

    if (!refreshToken && user) logout() // делаем запрос на выход
  }, [pathname])

  //тут наш компонент возвращает или просто то что внутри или с динамической ролью
  return !isOnlyAdmin && !isOnlyUser ? (
    <>{children}</>
  ) : (
    <DynamicCheckRole Component={{ isOnlyAdmin, isOnlyUser }}>
      {children}
    </DynamicCheckRole>
  ) // отключает SSR для тех кто требует авторизации
}

export default AuthProvider
