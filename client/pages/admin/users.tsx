import Users from '@/components/screens/admin/categories/users/Users'

import { NextPageAuth } from '@/shared/types/auth.types'

const UsersPage: NextPageAuth = () => {
  return <Users />
}

UsersPage.isOnlyAdmin = true //это благодаря использованию NextPageAuth

export default UsersPage
