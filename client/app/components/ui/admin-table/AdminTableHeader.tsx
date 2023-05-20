import cn from 'classnames'
import { FC } from 'react'

import styles from './AdminTable.module.scss'

const AdminTableHeader: FC<{ headerItems: string[] }> = ({ headerItems }) => {
  return (
    <div className={cn(styles.item, styles.itemHeader)}>
      {headerItems.map((headerItem) => (
        <div key={headerItem}>{headerItem}</div>
      ))}
      <div>actions</div>
    </div>
  )
}

export default AdminTableHeader
