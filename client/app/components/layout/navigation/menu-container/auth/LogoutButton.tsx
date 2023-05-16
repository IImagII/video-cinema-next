import { FC, MouseEvent } from 'react'

import MaterialIcon from '@/components/ui/MaterialIcon'

import { useActions } from '@/hooks/useActions'

// компонент для выхода из аккаунта
const LogoutButton: FC = () => {
  //это кастомный хук аналогично записи dispatch(logout())
  const { logout } = useActions()

  //функция самого выхода из аакаунда
  const handleLogout = (e: MouseEvent<HTMLAnchorElement>) => {
    //HTMLAnchorElement - это тип для ссылки <a>
    e.preventDefault()
    logout()
  }

  return (
    <li>
      {/* в нашем случае мы у ссылки отключили ее default состояние и навязали свое состояние */}
      <a onClick={handleLogout}>
        <MaterialIcon name="MdLogout" />
        <span>Logout</span>
      </a>
    </li>
  )
}

export default LogoutButton
