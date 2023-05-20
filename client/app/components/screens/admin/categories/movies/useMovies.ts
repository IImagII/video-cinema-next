import { getAdminUrl } from 'config/url.config'
import { ChangeEvent, useMemo, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { ITableItem } from '@/components/ui/admin-table/admin-table.interface'

import { useDebounce } from '@/hooks/useDebounce'

import { MovieService } from '@/services/movie.service'

import { convertMongoDate } from '@/utils/date/convertMongoDate'
import { getGenresList } from '@/utils/movie/getGenresListEach'
import { toastError } from '@/utils/toast-error'

export const useMovies = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const debouncedSearch = useDebounce(searchTerm, 500)

  //это запрос на получение movies согласно нашему условию поиска
  const queryData = useQuery(
    ['user list', debouncedSearch],
    () => MovieService.getMovies(debouncedSearch),
    {
      //туту модифицируем наши приходящие данные
      select: ({ data }) =>
        /**нам нужно сделать выборку и трансформировать под нашу таблицу */
        data.map(
          (movie): ITableItem => ({
            _id: movie._id,
            editUrl: getAdminUrl(`movie/edit/${movie._id}`),
            //мы делаем свой массив с преобразованием в нужный нам формат
            items: [
              movie.title,
              getGenresList(movie.genres),
              String(movie.rating)
            ]
          })
        ),
      onError(error) {
        toastError(error, 'movie list')
      }
    }
  )

  //кнопка для самого search
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  //делаем запрос на удаления movies
  const { mutateAsync: deleteAsync } = useMutation(
    'delete movie',
    (movieId: string) => MovieService.deleteMovie(movieId),
    {
      onError: (error) => {
        toastError(error, 'Delete movie')
      },
      //будет происходить при удачном удалении
      onSuccess: () => {
        toastr.success('Delete movie', 'delete was successful')
        queryData.refetch() // обновляем те данные который мы получили запросом выше чтобы данные сразу же обновились
      }
    }
  )

  //тут использовали чтобы закешировать данные которые нам приходят для оптимизации
  return useMemo(
    () => ({ handleSearch, ...queryData, deleteAsync, searchTerm }),
    [queryData, deleteAsync, searchTerm]
  )
}
