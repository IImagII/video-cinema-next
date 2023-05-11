import { FC } from 'react'

import SearchField from '@/components/ui/search-field/SearchField'

import styles from './Search.module.scss'
import SearchList from './SearchList/SearchList'
import { useSearch } from './useSearch'

const Search: FC = () => {
  //тут наш кастомный хук
  const { isSuccess, handleSearch, data, searchTerm } = useSearch()

  return (
    <div className={styles.wrapper}>
      {/* //вот наше кастомное поле с стилями */}
      <SearchField handleSearch={handleSearch} searchTerm={searchTerm} />
      {/* а вот то что мы получим в результате работы поиска будет показываться ниже */}
      {isSuccess && <SearchList movies={data || []} />}
    </div>
  )
}

export default Search
