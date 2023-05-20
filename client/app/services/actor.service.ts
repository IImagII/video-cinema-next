import axios from 'api/interseptors'

import { IActor } from '@/shared/types/movie.types'

import { getActorsUrl } from '../config/api.config'

export const ActorService = {
  //запросна получение users
  async getAll(searchTerm?: string) {
    //тут используем специальный axios коотрый идет с токеном
    return axios.get<IActor[]>(getActorsUrl(''), {
      params: searchTerm
        ? {
            searchTerm
          }
        : {}
    })
  },

  //запросна удаление actor
  async deleteActor(_id: string) {
    return axios.delete<string>(getActorsUrl(`/${_id}`))
  }
}
