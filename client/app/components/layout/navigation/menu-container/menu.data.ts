import { IMenu } from './menu.interface'

export const firstMenu: IMenu = {
  title: 'Menu',
  items: [
    {
      icon: 'MdHome', // из-за нашей типизации у нас очень типизированы иконки
      link: '/',
      title: 'Home'
    },
    {
      icon: 'MdExplore',
      link: '/genres',
      title: 'Discovery'
    },
    {
      icon: 'MdRefresh',
      link: '/fresh',
      title: 'Fresh movies'
    },
    {
      icon: 'MdLocalFireDepartment',
      link: '/trending',
      title: 'Trending now'
    }
  ]
}

export const userMenu: IMenu = {
  title: 'General',
  items: []
}

export const menus: IMenu[] = [firstMenu, userMenu]
