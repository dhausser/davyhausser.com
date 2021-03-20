import * as React from 'react'
import { Header } from 'components'
import { LayoutProps } from 'types'
import '../index.css'

function Layout({ children }: LayoutProps) {
  if (typeof window !== 'undefined') {
    document.documentElement.setAttribute('data-theme', 'dark')
  }
  return (
    <div>
      <Header siteTitle="" />
      <main>{children}</main>
    </div>
  )
}

export default Layout
