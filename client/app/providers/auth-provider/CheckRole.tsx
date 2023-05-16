import { useRouter } from 'next/router'
import { FC, PropsWithChildren } from 'react'
import { escapeLeadingUnderscores } from 'typescript'

import { useAuth } from '@/hooks/useAuth'

import { TypeComponentAuthFields } from '@/shared/types/auth.types'

//компонент который позволяет нам проверять роли у пользователя и делить его на администратора и гостя
const Checkrole: FC<PropsWithChildren<TypeComponentAuthFields>> = ({
  children,
  Component: { isOnlyAdmin, isOnlyUser }
}) => {
  const { user } = useAuth() //проверяем авторизацию

  const router = useRouter()

  const Children = () => <>{children}</>

  if (user?.isAdmin) return <Children /> // тут проверили что страница не для пользователя не для админа

  if (isOnlyAdmin) {
    router.pathname !== '/404' && router.replace('404')
    return null
  }

  const isUser = user && !user.isAdmin // проверяем что user не admin

  if (isUser && isOnlyUser) return <Children />
  else {
    router.pathname !== '/auth' && router.replace('/auth') // перенаправляем на страницу авторизации
    return null
  }
}

export default Checkrole
