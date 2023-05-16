/** чтобы обратно возвращаться настраницу например просмотра после
 * того как пройдешь атворизацию*/
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { useAuth } from '@/hooks/useAuth'

export const useAuthRedirect = () => {
  const { user } = useAuth()
  /**query - это query параметр, push- для переадрисации */
  const { query, push } = useRouter()

  //тут будет кидать на главную страницу после того как мы войдем в истему тоеть зарегестрируемся
  const redirect = query.redirect ? String(query.redirect) : '/'

  useEffect(() => {
    /**тут будет отслеживаться и если у нас пользователь
     *  атворизирован то user будет и будет произведена переадресация*/
    if (user) push(redirect)
  }, [user, redirect, push])
}
