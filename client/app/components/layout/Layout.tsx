import { ChildContextProvider, FC, PropsWithChildren } from 'react'

import styles from './Layout.module.scss'
import Navigation from './navigation/Navigation'
import SideBar from './sidebar/SideBar'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Navigation />
      <div className={styles.center}>{children}</div>
      <SideBar />
    </div>
  )
}

export default Layout
