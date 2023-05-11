import { getGenreUrl, getMovieUrl } from 'config/url.config'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import MaterialIcon from '@/components/ui/MaterialIcon'

import { IMovie } from '@/shared/types/movie.types'

import { getGenresListEach } from '@/utils/movie/getGenresListEach'

import styles from './MovieList.module.scss'

//это комопонент для отображения каждого фильма при map
const MovieItem: FC<{ movie: IMovie }> = ({ movie }) => {
  return (
    <div className={styles.item}>
      <Link href={getMovieUrl(movie.slug)}>
        <Image
          src={movie.videoUrl}
          draggable={false}
          alt={movie.title}
          width={65}
          height={97}
          priority // для того чтобы обозначяить чтобы грузился быстрее всех
        />
      </Link>
      <div className={styles.info}>
        <div>
          <div className={styles.title}>{movie.title}</div>
        </div>
        <div className={styles.genres}>
          {movie.genres.map((genre, idx) => (
            <Link href={getGenreUrl(genre.slug)} key={genre._id}>
              {getGenresListEach(idx, movie.genres.length, genre.name)}
            </Link>
          ))}
        </div>
      </div>
      {/* тут отображается рейтинг */}
      <div className={styles.rating}>
        <MaterialIcon name="MdStarRate" />
        <span>{movie.rating.toFixed(1)}</span>
      </div>
    </div>
  )
}

export default MovieItem
