import { FC } from 'react'

import Search from './Search/Search'
import styles from './SideBar.module.scss'
import MoviesContainer from './movies-container/MoviesContainer'

//это правая сторона сайта с поиском и выводом фильмов
const SideBar: FC = () => {
  return (
    <div className={styles.sidebar}>
      <Search />
      <MoviesContainer />
    </div>
  )
}

export default SideBar
