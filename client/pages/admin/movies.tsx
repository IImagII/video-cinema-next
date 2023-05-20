import Movies from '@/components/screens/admin/categories/movies/Movies'

import { NextPageAuth } from '@/shared/types/auth.types'

const MoviesPage: NextPageAuth = () => {
  return <Movies />
}

MoviesPage.isOnlyAdmin = true //это благодаря использованию NextPageAuth

export default MoviesPage
