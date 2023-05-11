import { axiosClassic } from 'api/interseptors'
import { getMoviesUrl } from 'config/api.config'

import { IMovie } from '@/shared/types/movie.types'

export const MovieService = {
  //это запрос для поиска сюда добавляем парамер для поиска и отправляем запрос
  async getMovies(searchTerm?: string) {
    return axiosClassic.get<IMovie[]>(getMoviesUrl(``), {
      params: searchTerm
        ? {
            searchTerm
          }
        : {}
    })
  },
  //запрос для получения популярных фильмов из компонента PopularMovies.tsx
  async getMostPopularMovies() {
    //тут представлен второй способ как можно вернуть ответ от нашего запроса выше был первый способ
    const { data: movies } = await axiosClassic.get<IMovie[]>(
      getMoviesUrl('/most-popular')
    )
    return movies
  }
}
