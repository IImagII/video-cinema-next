import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import styles from './AdminNavigation.module.scss'
import { INavItem } from './admin-navigation.interface'

//компонент для админ панели
//FC<{ item: INavItem }> - вот такая запись более правильная для последующего использования map
const AdminNavItem: FC<{ item: INavItem }> = ({ item: { link, title } }) => {
  const { asPath } = useRouter() //это нужно для отображения активного элемента

  return (
    <li>
      {/* тут отображается и показывается активный элемент если он нажат представлена реализация */}
      <Link href={link} className={cn({ [styles.active]: asPath === link })}>
        {title}
      </Link>
    </li>
  )
}

export default AdminNavItem
