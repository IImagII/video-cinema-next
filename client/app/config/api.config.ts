/**тут будет собраны все пути в одном файле */

// export const API_URL = `${process.env.API_URL}/api` // тут берем из нашего конфига но возможно из просто env

export const API_URL_BASE = `${process.env.NEXT_PUBLIC_API_URL}/api`
/**ниже собраны ссылки для запросов */
export const getAuthUrl = (string: string) => `/auth${string}`
export const getUsersUrl = (string: string) => `/users${string}`
export const getMoviesUrl = (string: string) => `/movies${string}`
export const getGenresUrl = (string: string) => `/genres${string}`
export const getActorsUrl = (string: string) => `/actors${string}`
export const getRatingsUrl = (string: string) => `/ratings${string}`

/**используется вот так вот return axios.get<IGenre[]>(getGenresUrl('/popular'))
 * потом тоесть мы передаем аргументы в функцию */
