import { getMoviesUrl } from 'config/api.config'
import { getMovieUrl } from 'config/url.config'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { IMovie } from '@/shared/types/movie.types'

import styles from './SearchList.module.scss'

const SearchList: FC<{ movies: IMovie[] }> = ({ movies }) => {
  return (
    <div className={styles.list}>
      {movies.length ? (
        movies.map((movie) => (
          //getMoviesUrl(movie.slug) - для отображения впоиске ссылки на фильм который будет найден
          <Link href={getMoviesUrl(movie.slug)} key={movie._id}>
            <Image
              src={movie.poster}
              alt={movie.title}
              width={50}
              height={50}
            />
            <span>{movie.title}</span>
          </Link>
        ))
      ) : (
        <div className="text-white text-center my-4">Фильмы не найдены</div>
      )}
    </div>
  )
}

export default SearchList
