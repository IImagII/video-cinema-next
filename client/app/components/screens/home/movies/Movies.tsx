import { FC } from 'react'

import AdminTable from '@/components/ui/admin-table/AdminTable'
import AdminHeader from '@/components/ui/admin-table/admin-header-table/AdminHeader'
import Heading from '@/components/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'

import AdminNavigation from '../../../ui/admin-navigation/AdminNavigation'

import { useMovies } from './useMovies'

//компонент который оотбражает movie в системе и отображаетих и удаляет- это для admin
const Movies: FC = () => {
  //мы всю логикуперенесли в кастомный хук там находиться логика по запросам
  const { handleSearch, isLoading, searchTerm, data, deleteAsync } = useMovies()

  return (
    <Meta title="Movies">
      <AdminNavigation />
      <Heading title="Movies" />

      <AdminHeader searchTerm={searchTerm} handleSearch={handleSearch} />

      {/* это мы сделали шаблон для все категорий который присутствуют
       в admin панелит и у нас в зависимости от того что мы туда передаем 
       будут выводиться разные вещи */}
      <AdminTable
        isLoading={isLoading}
        removeHandler={deleteAsync}
        headerItems={['Title', 'Genres', 'Rating']}
        tableItems={data || []}
      />
    </Meta>
  )
}

export default Movies
