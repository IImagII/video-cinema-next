import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import MaterialIcon from '@/components/ui/MaterialIcon'

import styles from './Menu.module.scss'
import { IMenuItem } from './menu.interface'

const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
  const { asPath } = useRouter() // так мы получаем текущий путь для того чтобы сделать выделение ссылки активным он нам нужен для сравнения

  return (
    <li
      className={cn({
        //тут сразу деаем проверку и в зависимости от проверки нам подставиться нужный класс
        [styles.active]: asPath === item.link
      })}
    >
      <Link href={item.link}>
        <MaterialIcon name={item.icon} />
        <span>{item.title}</span>
      </Link>
    </li>
  )
}

export default MenuItem
