import { FC } from 'react'

import { useAuth } from '@/hooks/useAuth'

import { getAdminHomeUrl } from '../../../../../config/url.config'
import MenuItem from '../MenuItem'

import LogoutButton from './LogoutButton'

//компонент который формирует несколько меню в зависимости от того что у нас авотризирован user фвьшт он или нет
const AuthItems: FC = () => {
  const { user } = useAuth() //берем наш пользователь атворизирован или нет

  return (
    <>
      {user ? (
        <>
          <MenuItem
            item={{
              icon: 'MdSettings',
              link: '/profile',
              title: 'Profile'
            }}
          />
          <LogoutButton />
        </>
      ) : (
        <MenuItem
          item={{
            icon: 'MdLogin',
            link: '/auth',
            title: 'Login'
          }}
        />
      )}

      {/* тут проверяем если user admin */}
      {user?.isAdmin && (
        <MenuItem
          item={{
            icon: 'MdOutlineLock',
            link: getAdminHomeUrl(),
            title: 'Admin panel'
          }}
        />
      )}
    </>
  )
}

export default AuthItems
