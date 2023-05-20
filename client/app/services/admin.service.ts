import axios from 'api/interseptors'

import { getUsersUrl } from '../config/api.config'

export const AdminService = {
  async getCountUsers() {
    //тут используем специальный axios кастомный который уже идет с токеном тоесть авторизированный
    return axios.get<number>(getUsersUrl('/count'))
  }
}
