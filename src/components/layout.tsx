import * as React from 'react'
import { Header } from 'components'
import 'styles/index.css'

interface LayoutProps {
  children: React.ReactElement | Array<React.ReactElement>
}

function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Header siteTitle="" />
      <main>{children}</main>
    </div>
  )
}

export default Layout
