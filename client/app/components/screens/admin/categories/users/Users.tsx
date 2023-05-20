import { FC } from 'react'

import AdminTable from '@/components/ui/admin-table/AdminTable'
import AdminHeader from '@/components/ui/admin-table/admin-header-table/AdminHeader'
import Heading from '@/components/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'

import AdminNavigation from '../../../../ui/admin-navigation/AdminNavigation'

import { useUsers } from './useUsers'

//компонент который оотбражает users в системе и отображаетих и удаляет- это для admin
const Users: FC = () => {
  //мы всю логикуперенесли в кастомный хук там находиться логика по запросам
  const { handleSearch, isLoading, searchTerm, data, deleteAsync } = useUsers()

  return (
    <Meta title="Users">
      <AdminNavigation />
      <Heading title="Users" />

      <AdminHeader searchTerm={searchTerm} handleSearch={handleSearch} />

      {/* это мы сделали шаблон для все категорий который присутствуют
       в admin панелит и у нас в зависимости от того что мы туда передаем 
       будут выводиться разные вещи */}
      <AdminTable
        isLoading={isLoading}
        removeHandler={deleteAsync}
        headerItems={['Email', 'Date register']}
        tableItems={data || []}
      />
    </Meta>
  )
}

export default Users
