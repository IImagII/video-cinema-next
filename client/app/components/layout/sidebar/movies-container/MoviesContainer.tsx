import { FC } from 'react'

import PopularMovies from './PopularMovies'
import FavoriteMovies from './favorite-movies/FavoriteMovies'

const MoviesContainer: FC = () => {
  return (
    <>
      <PopularMovies />
      <FavoriteMovies />
    </>
  )
}

export default MoviesContainer
