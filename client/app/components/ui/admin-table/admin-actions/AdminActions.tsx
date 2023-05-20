import { useRouter } from 'next/router'
import { FC } from 'react'

import MaterialIcon from '../../MaterialIcon'

import styles from './AdminActions.module.scss'

interface IAdminActions {
  editUrl: string
  removeHandler: () => void
}

//компонент в котором будет двекнопки редактирование и удаление

const AdminActions: FC<IAdminActions> = ({ editUrl, removeHandler }) => {
  const { push } = useRouter() // для того чтобы сделть кнопку

  return (
    <div className={styles.actions}>
      {/* кнопка для редактирования */}
      <button onClick={() => push(editUrl)}>
        <MaterialIcon name="MdEdit" />
      </button>

      {/* кнопка на удаление  */}
      <button onClick={removeHandler}>
        <MaterialIcon name="MdClose" />
      </button>
    </div>
  )
}

export default AdminActions
