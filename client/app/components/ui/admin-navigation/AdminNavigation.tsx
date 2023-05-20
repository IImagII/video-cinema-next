import { FC } from 'react'

import AdminNavItem from './AdminNavItem'
import styles from './AdminNavigation.module.scss'
import { navItems } from './admin-navigation.data'

const AdminNavigation: FC = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        {/* вот именно по этом у в компоненте AdminNavItem мы делали пропсы item чтобы было их удобно забрать */}
        {navItems.map((item) => (
          <AdminNavItem item={item} key={item.link} />
        ))}
      </ul>
    </nav>
  )
}

export default AdminNavigation
