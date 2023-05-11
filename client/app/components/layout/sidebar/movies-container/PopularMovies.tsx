import { FC, use } from 'react'
import { useQuery } from 'react-query'

import SkeletonLoader from '@/components/ui/Skeleton'

import { MovieService } from '@/services/movie.service'

import MovieList from './MovieList'

//компоненнт который отображает популярные фильмы и соответственно делает такзапрос
const PopularMovies: FC = () => {
  //делаем запрос на получение популярных фильмов
  const { isLoading, data: popularMovies } = useQuery(
    //data: popularMovies - это мы сразу переименовали наш ответ
    'Popular movies in sidebar',
    () => MovieService.getMostPopularMovies()
  )

  return isLoading ? (
    <div className="mt-11">
      <SkeletonLoader count={3} className="h-28 mb-4" />
    </div>
  ) : (
    <MovieList
      link="/trending"
      movies={popularMovies || []}
      title="Popular Movies"
    />
  )
}

export default PopularMovies
