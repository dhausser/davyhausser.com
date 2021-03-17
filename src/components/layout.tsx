import * as React from 'react'
import { Header } from 'components'
import 'styles/index.css'

interface Props {
  children: React.ReactElement
}

function Layout({ children }: Props) {
  return (
    <div>
      <Header siteTitle="TITLE" />
      <main>{children}</main>
    </div>
  )
}

export default Layout
