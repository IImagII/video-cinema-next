import axios, { axiosClassic } from 'api/interseptors'

import { IGenre } from '@/shared/types/movie.types'

import { getGenresUrl } from '../config/api.config'

export const GenreService = {
  async getAll(searchTerm?: string) {
    return axiosClassic.get<IGenre[]>(getGenresUrl(``), {
      params: searchTerm
        ? {
            searchTerm
          }
        : {}
    })
  },

  //запросна удаление genres
  async deleteGenre(_id: string) {
    return axios.delete<string>(getGenresUrl(`/${_id}`))
  }
}
/** 
 * вариант если есть лимит
 * async getPopularGenres(limit = 4) {
    return axiosClassic.get<IGenre[]>(getGenresUrl('/popular'), {
      params: {
        limit
      }
    }) 
     */
