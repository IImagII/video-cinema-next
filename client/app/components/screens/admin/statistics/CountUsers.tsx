import cn from 'classnames'
import { FC } from 'react'
import { useQuery } from 'react-query'

import SkeletonLoader from '@/components/ui/Skeleton'

import { AdminService } from '@/services/admin.service'

import styles from '../Admin.module.scss'

//компонент который выдает подсчет users которые у тебя зарегестрированы
//данные приходят из запроса с сервера

const CountUsers: FC = () => {
  /**туту делаем запрос и получаем наше количество users
   * запрос у нас для атворизированныйх в него встроен токен уже
   */

  const { isLoading, data: response } = useQuery('Count users', () =>
    AdminService.getCountUsers()
  )

  return (
    <div className={cn(styles.block, styles.countUsers)}>
      <div>
        {isLoading ? (
          <SkeletonLoader />
        ) : (
          <div className={styles.number}>{response?.data}</div>
        )}
        <div className={styles.description}>users</div>
      </div>
    </div>
  )
}

export default CountUsers
