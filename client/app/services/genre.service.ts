import axios from 'axios'

export const GenerService = {
  async getPopularGenres(limit = 4) {
    return axios.get<IGenre[]>()
  }
}
