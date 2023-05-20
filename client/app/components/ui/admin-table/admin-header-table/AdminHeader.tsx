import { ChangeEvent, FC } from 'react'

import SearchField from '../../search-field/SearchField'

import styles from './Admin.module.scss'
import AdminCreateButton from './AdminCreateButton'

interface IAdminHeader {
  onClick?: () => void
  searchTerm: string
  handleSearch: (event: ChangeEvent<HTMLInputElement>) => void
}

//компонент который будет показывать нам наблицу в компоненте home/users/Users.tsx

const AdminHeader: FC<IAdminHeader> = ({
  onClick,
  handleSearch,
  searchTerm
}) => {
  return (
    <div className={styles.header}>
      {/* тут вставляем уже готовое поле со стилями поиска */}
      <SearchField searchTerm={searchTerm} handleSearch={handleSearch} />
      {onClick && <AdminCreateButton onClick={onClick} />}
    </div>
  )
}

export default AdminHeader
