import { FC } from 'react'

import Menu from './Menu'
import GenresMenu from './genres/GenresMenu'
import { firstMenu, userMenu } from './menu.data'

const MenuContainer: FC = () => {
  return (
    <>
      <Menu menu={firstMenu} />
      <GenresMenu />
      <Menu menu={userMenu} />
    </>
  )
}

export default MenuContainer
