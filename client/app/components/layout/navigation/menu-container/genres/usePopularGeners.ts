import { getGenreUrl } from 'config/url.config'
import { useQuery } from 'react-query'

import { GenreService } from '@/services/genre.service'

import { IMenuItem } from '../menu.interface'

export const usePopularGenres = () => {
  /** запрос сделанный на react-query */
  const queryData = useQuery(
    'popular genres menu',
    () => GenreService.getAll(),
    {
      /**select - позволяет трансформировать тоесть изменять то что
       * нам приходит например пришел
       * массив мы с него можем вытянуть одно поле */
      select: ({ data }) =>
        data
          .map(
            (genre): IMenuItem => ({
              icon: genre.icon,
              link: getGenreUrl(genre.slug), // тут используем функцию которая сам подставляеит путь
              title: genre.name
            })
          )
          .splice(0, 4),
      onError(error) {
        console.log(error)
      }
    }
  )

  return queryData
}
