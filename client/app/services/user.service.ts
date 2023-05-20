import axios from 'api/interseptors'
import { getUsersUrl } from 'config/api.config'

import { IUser } from '@/shared/types/user.types'

export const UserService = {
  //запросна получение users
  async getAll(searchTerm?: string) {
    //тут используем специальный axios коотрый идет с токеном
    return axios.get<IUser[]>(getUsersUrl(''), {
      params: searchTerm
        ? {
            searchTerm
          }
        : {}
    })
  },

  //запросна удаление users
  async deleteUser(_id: string) {
    return axios.delete<string>(getUsersUrl(`/${_id}`))
  }
}
