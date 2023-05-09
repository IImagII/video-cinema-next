import { FC } from 'react'

import Menu from './Menu'
import { firstMenu, userMenu } from './menu.data'

const MenuContainer: FC = () => {
  return (
    <>
      <Menu menu={firstMenu} />
      <Menu menu={userMenu} />
    </>
  )
}

export default MenuContainer
