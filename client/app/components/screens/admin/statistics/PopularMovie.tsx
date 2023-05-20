import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { useQuery } from 'react-query'

import SkeletonLoader from '@/components/ui/Skeleton'
import SubHeading from '@/components/ui/heading/SubHeading'

import { getMoviesUrl } from '../../../../config/api.config'
import { MovieService } from '../../../../services/movie.service'
import { IMovie } from '../../../../shared/types/movie.types'
import styles from '../Admin.module.scss'

//компонент который оотбражает самый популярный фильм в системе инфа берется из запроса

const PopularMovie: FC = () => {
  //делаем запрос наполучение самого популярного фильма
  const { isLoading, data: movie } = useQuery(
    'Most popular movie admin',
    () => MovieService.getMostPopularMovies(),
    {
      /**тут мы используя select можем сразу изменять наши приходящие данные
       * в нашем случае намс необходимо только первій єлемент
       */
      select: (data): IMovie => data[0]
    }
  )

  return (
    <div className={cn(styles.block, styles.countUsers)}>
      <SubHeading title="Popular movies" />

      {isLoading ? (
        <SkeletonLoader className="h-48" />
      ) : (
        movie && (
          <>
            {/* тут показываем сколько раз был открыт данный фильм */}
            <h3>Открыт {movie.countOpened}</h3>
            <Link href={getMoviesUrl(movie.slug)}>
              {/* тут картинкапосте нашего самого популярного фильма */}
              <Image
                width={285}
                height={176}
                src={movie.bigPoster}
                alt={movie.title}
                className={styles.image}
                unoptimized
              />
            </Link>
          </>
        )
      )}
    </div>
  )
}

export default PopularMovie
