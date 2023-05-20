import { FC } from 'react'

import styles from './AdminTable.module.scss'
import AdminActions from './admin-actions/AdminActions'
import { IAdminTableItem } from './admin-table.interface'

const AdminTableItem: FC<IAdminTableItem> = ({ removeHandler, tableItem }) => {
  return (
    <div className={styles.item}>
      {tableItem.items.map((item) => (
        <div key={item}>{item}</div>
      ))}

      <AdminActions removeHandler={removeHandler} editUrl={tableItem.editUrl} />
    </div>
  )
}

export default AdminTableItem
