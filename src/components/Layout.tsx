import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import { Navigation } from './Navigation'

export function Layout() {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  )
}
