import { getAdminUrl } from 'config/url.config'
import { ChangeEvent, useMemo, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { ITableItem } from '@/components/ui/admin-table/admin-table.interface'

import { useDebounce } from '@/hooks/useDebounce'

import { ActorService } from '@/services/actor.service'

import { convertMongoDate } from '@/utils/date/convertMongoDate'
import { toastError } from '@/utils/toast-error'

export const useActors = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const debouncedSearch = useDebounce(searchTerm, 500)

  //это запрос на получение users согласно нашему условию поиска
  const queryData = useQuery(
    ['actor list', debouncedSearch],
    () => ActorService.getAll(debouncedSearch),
    {
      //туту модифицируем наши приходящие данные
      select: ({ data }) =>
        /**нам нужно сделать выборку и трансформировать под нашу таблицу */
        data.map(
          (actor): ITableItem => ({
            _id: actor._id,
            editUrl: getAdminUrl(`actor/edit/${actor._id}`),
            //мы делаем свой массив с преобразованием в нужный нам формат
            items: [actor.name, String(actor.countMovies)]
          })
        ),
      onError(error) {
        toastError(error, 'actor list')
      }
    }
  )

  //кнопка для самого search
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  //делаем запрос на удаления users
  const { mutateAsync: deleteAsync } = useMutation(
    'delete actor',
    (actorId: string) => ActorService.deleteActor(actorId),
    {
      onError: (error) => {
        toastError(error, 'Delete user')
      },
      //будет происходить при удачном удалении
      onSuccess: () => {
        toastr.success('Delete actor', 'delete was successful')
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
