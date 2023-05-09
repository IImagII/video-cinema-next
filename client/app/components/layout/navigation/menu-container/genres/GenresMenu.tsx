import { FC } from 'react'

import { usePopularGenres } from './usePopularGeners'

const GenresMenu: FC = () => {
  const { isLoading, data } = usePopularGenres() // кастомный наш хук
  return <div></div>
}

export default GenresMenu
