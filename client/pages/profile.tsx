import { NextPageAuth } from '@/shared/types/auth.types'

/**мы тут стандартный NextPage поменяли на наш кастомный NextPageAuth для
 * того чтобы правильно проверять роли для того чтобы работало ProfilePage.isOnlyUser = true*/
const ProfilePage: NextPageAuth = () => {
  return <div>profile</div>
}

ProfilePage.isOnlyUser = true

export default ProfilePage
