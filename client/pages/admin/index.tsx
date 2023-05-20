import Admin from '@/components/screens/admin/Admin'

import { NextPageAuth } from '@/shared/types/auth.types'

const AdminPage: NextPageAuth = () => {
  return <Admin />
}

AdminPage.isOnlyAdmin = true //это благодаря использованию NextPageAuth

export default AdminPage
