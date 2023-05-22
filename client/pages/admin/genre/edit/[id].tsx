import GenreEdit from '@/components/screens/admin/edit/GenreEdit'

import { NextPageAuth } from '@/shared/types/auth.types'

/**Это компонент предназначенный для редактирования жанров
 * по пути admin/genre/edit/id
 */
const GenreEditPage: NextPageAuth = () => {
  return <GenreEdit />
}

GenreEditPage.isOnlyAdmin = true //это благодаря использованию NextPageAuth

export default GenreEditPage
