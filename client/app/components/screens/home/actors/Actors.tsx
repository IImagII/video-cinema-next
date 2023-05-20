import { FC } from 'react'

import AdminTable from '@/components/ui/admin-table/AdminTable'
import AdminHeader from '@/components/ui/admin-table/admin-header-table/AdminHeader'
import Heading from '@/components/ui/heading/Heading'

import AdminNavigation from '@/ui/admin-navigation/AdminNavigation'

import Meta from '@/utils/meta/Meta'

import { useActors } from './useActors'

//компонент который оотбражает users в системе и отображаетих и удаляет- это для admin
const Actors: FC = () => {
  //мы всю логикуперенесли в кастомный хук там находиться логика по запросам
  const { handleSearch, isLoading, searchTerm, data, deleteAsync } = useActors()

  return (
    <Meta title="Actors">
      <AdminNavigation />
      <Heading title="Actors" />

      <AdminHeader searchTerm={searchTerm} handleSearch={handleSearch} />

      {/* это мы сделали шаблон для все категорий который присутствуют
       в admin панелит и у нас в зависимости от того что мы туда передаем 
       будут выводиться разные вещи */}
      <AdminTable
        isLoading={isLoading}
        removeHandler={deleteAsync}
        headerItems={['Name', 'Count movies']}
        tableItems={data || []}
      />
    </Meta>
  )
}

export default Actors
