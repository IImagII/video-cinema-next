import { ChangeEvent, useState } from 'react'
import { useQuery } from 'react-query'

import { useDebounce } from '@/hooks/useDebounce'

import { MovieService } from '@/services/movie.service'

//тут будет сама логик по поиску
export const useSearch = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const debouncedSearch = useDebounce(searchTerm, 500)

  /**тут внимание сделан запрос с использованием аргумента debouncedSearch
   *поэтому указываем именно массив с жданными куда и помешаем наш аргумент*/
  const { isSuccess, data } = useQuery(
    ['search movie list', debouncedSearch],
    () =>
      //тут сделан get запрос и использованием параметра для поиска
      MovieService.getMovies(debouncedSearch),
    {
      select: ({ data }: any) => data,
      enabled: !!debouncedSearch // это показывает что будет включено только при наличии debouncedSearch
    }
  )

  //функциячтобы получить что пользователь написал в поиске
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  return { isSuccess, handleSearch, data, searchTerm }
}
