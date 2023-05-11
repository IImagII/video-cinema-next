import { FC } from 'react'

import SkeletonLoader from '@/components/ui/Skeleton'

import Menu from '../Menu'

import { usePopularGenres } from './usePopularGeners'

const GenresMenu: FC = () => {
  const { isLoading, data } = usePopularGenres() // кастомный наш хук в котором запрос
  return isLoading ? (
    <div className="mx-11 mb-6">
      {/* тут вставляем при загрузке */}
      <SkeletonLoader count={5} className="h-7 mt-6" />
    </div>
  ) : (
    <Menu menu={{ title: 'Popular genres', items: data || [] }} />
  )
}

export default GenresMenu
