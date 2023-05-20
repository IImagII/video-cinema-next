import Users from '@/components/screens/home/users/Users'

import { NextPageAuth } from '@/shared/types/auth.types'

const UsersPage: NextPageAuth = () => {
  return <Users />
}

UsersPage.isOnlyAdmin = true //это благодаря использованию NextPageAuth

export default UsersPage
