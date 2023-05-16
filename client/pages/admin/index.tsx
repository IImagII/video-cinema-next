import { NextPage } from 'next'

import { NextPageAuth } from '@/shared/types/auth.types'

const AdminPage: NextPageAuth = () => {
  return <div>index</div>
}

AdminPage.isOnlyAdmin = true //это благодаря использованию NextPageAuth

export default AdminPage
