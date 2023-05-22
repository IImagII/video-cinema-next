/**функция для редактирования жанров */
import { getAdminUrl } from 'config/url.config'
import { useRouter } from 'next/router'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { GenreService } from '@/services/genre.service'

import { toastError } from '@/utils/toast-error'

import { getKeys } from '../../../../utils/object/getKeys'

import { IGenreEditInput } from './genre-edit.interface'

export const useGenreEdit = (setValue: UseFormSetValue<IGenreEditInput>) => {
  const { push, query } = useRouter() //для того чтобы получить наш id из адресной строки

  const genreId = String(query.id) // тут просто предаем и превращаем в строку String для того чтобы получить строку и убрать любые другие форматы данных коотрыйе там могут прийти

  //делаем запрос на получение данных которые потом будем редактировать
  const { isLoading } = useQuery(
    ['genre', genreId],
    () => GenreService.getById(genreId),
    {
      onSuccess: ({ data }) => {
        /**тут по простому будет реализовано просто  setValue('name', data.name) тоесть
         * мы в функцию передаем данные, но это не добно если у нас много полей будет
         * повторяться строка поэтому нужно применитья forEach()чтобы пройтись по всем
         * полям и записать данные
         */
        getKeys(data).forEach((key) => {
          /**тут мы преобразовали данные вытащили из низ ключи
           * передали в соответствующюю функцию setValue
           */
          setValue(key, data[key])
        })

        setValue('name', data.name)
      },

      //тут идет обработка ошибок в option
      onError: (error: any) => {
        toastError(error, 'Get genre')
      },
      enabled: !!query.id // то есть будет срабатывать если у вас будет query.id
    }
  )

  //теперь реализовываем запрос на мутацию(редактирование) данных

  const { mutateAsync } = useMutation(
    'update genre',
    (data: IGenreEditInput) => GenreService.update(genreId, data),
    {
      //тут идет обработка ошибок в option
      onError: (error: any) => {
        toastError(error, 'Update genre')
      },
      onSuccess() {
        toastr.success('Update genre', 'update was successful') //тут выводим сообщение что все в порядке
        push(getAdminUrl('genres')) //таким образом перенаправляем на страницу жанров сразу
      }
    }
  )

  //функция для нашей формы
  const onSubmit: SubmitHandler<IGenreEditInput> = async (data) => {
    await mutateAsync(data) //вызываем нашу функцию с запросом
  }

  return { onSubmit, isLoading }
}
