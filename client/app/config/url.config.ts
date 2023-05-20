/**функция которая подставляет текущий link а также все наши запросы*/
export const getMovieUrl = (slug: string) => `/movie/${slug}`
export const getGenreUrl = (slug: string) => `/genre/${slug}` //используется вот так      link: getGenreUrl()
export const getActorUrl = (slug: string) => `/actor/${slug}`

export const getAdminUrl = (url: string) => `/admin/${url}`
export const getAdminHomeUrl = () => getAdminUrl('').slice(0, -1) // это главная страница
