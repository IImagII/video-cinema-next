import Genres from '@/components/screens/admin/categories/genres/Genres'

import { NextPageAuth } from '@/shared/types/auth.types'

const GenresPage: NextPageAuth = () => {
  return <Genres />
}

GenresPage.isOnlyAdmin = true //это благодаря использованию NextPageAuth

export default GenresPage
