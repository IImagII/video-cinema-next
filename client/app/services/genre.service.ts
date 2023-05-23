import axios, { axiosClassic } from 'api/interseptors'

import { IGenreEditInput } from '@/components/screens/admin/edit/genre-edit.interface'

import { IGenre } from '@/shared/types/movie.types'

import { getGenresUrl } from '../config/api.config'

export const GenreService = {
  async getAll(searchTerm?: string) {
    return axiosClassic.get<IGenre[]>(getGenresUrl(''), {
      params: searchTerm
        ? {
            searchTerm
          }
        : {}
    })
  },

  /**это запрос для того чтобы получить даннеы и потом передать их для редактирования
   * ьлесьб эти мы сначало получим данные а поотм будет запрос на update отт что ниже
   * мы получаем конкретные данные по id
   */
  async getById(_id: string) {
    return axios.get<IGenreEditInput>(getGenresUrl(`/${_id}`))
  },

  //запрос на редактирование genre
  async update(_id: string, data: IGenreEditInput) {
    return axios.put<string>(getGenresUrl(`/${_id}`), data)
  },

  //запросна удаление genres
  async delete(_id: string) {
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
