import { FC } from 'react'

import SkeletonLoader from '@/components/ui/Skeleton'

import styles from './AdminTable.module.scss'
import AdminTableHeader from './AdminTableHeader'
import AdminTableItem from './AdminTableItem'
import { ITableItem } from './admin-table.interface'

interface IAdminTable {
  tableItems: ITableItem[]
  isLoading: boolean
  headerItems: string[]
  removeHandler: (id: string) => void
}

/**общий компонент который будет отображать user и с ними можнобудет
 * проводить разлиные дейтсвия такие как редактирование и удаление
 *
 * По факту он является шаблоном его можно применять ко всем категориям
 * которы е находяться в admin панели  меняя только пропсі*/

const AdminTable: FC<IAdminTable> = ({
  headerItems,
  isLoading,
  removeHandler,
  tableItems
}) => {
  return (
    <div>
      <AdminTableHeader headerItems={headerItems} />
      {isLoading ? (
        <SkeletonLoader count={1} height={48} className="mt-4" />
      ) : tableItems.length ? (
        tableItems.map((tableItem) => (
          <AdminTableItem
            removeHandler={() => removeHandler(tableItem._id)}
            tableItem={tableItem}
            key={tableItem._id}
          />
        ))
      ) : (
        <div className={styles.notFound}>Элемент не найден</div>
      )}
    </div>
  )
}

export default AdminTable
