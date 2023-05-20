import Actors from '@/components/screens/home/actors/Actors'
import { NextPageAuth } from '@/shared/types/auth.types'

const ActorsPage: NextPageAuth = () => {
  return <Actors />
}

ActorsPage.isOnlyAdmin = true //это благодаря использованию NextPageAuth

export default ActorsPage
