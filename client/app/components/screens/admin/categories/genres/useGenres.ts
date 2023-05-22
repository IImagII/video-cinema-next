import { getAdminUrl } from 'config/url.config'
import { ChangeEvent, useMemo, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { ITableItem } from '@/components/ui/admin-table/admin-table.interface'

import { useDebounce } from '@/hooks/useDebounce'

import { GenreService } from '@/services/genre.service'

import { toastError } from '@/utils/toast-error'

export const useGenres = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const debouncedSearch = useDebounce(searchTerm, 500)

  //это запрос на получение genre согласно нашему условию поиска
  const queryData = useQuery(
    ['genre list', debouncedSearch],
    () => GenreService.getAll(debouncedSearch),
    {
      //туту модифицируем наши приходящие данные
      select: ({ data }) =>
        /**нам нужно сделать выборку и трансформировать под нашу таблицу */
        data.map(
          (genre): ITableItem => ({
            _id: genre._id,
            editUrl: getAdminUrl(`genre/edit/${genre._id}`),
            //мы делаем свой массив с преобразованием в нужный нам формат
            items: [genre.name, genre.slug]
          })
        ),
      onError(error) {
        toastError(error, 'genre list')
      }
    }
  )

  //кнопка для самого search
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  //делаем запрос на удаления genre
  const { mutateAsync: deleteAsync } = useMutation(
    'delete genre',
    (genreId: string) => GenreService.delete(genreId),
    {
      onError: (error) => {
        toastError(error, 'Delete genre')
      },
      //будет происходить при удачном удалении
      onSuccess: () => {
        toastr.success('Delete genre', 'delete was successful')
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
