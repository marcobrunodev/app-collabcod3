import { createBrowserRouter } from 'react-router-dom'
import Loading from '../layouts/Loading'
import Home from '../pages/Home'
import Login from '../pages/Login'

const router = createBrowserRouter([{
  path: '/',
  element: (
    <>
      <Loading />
      <Login />
    </>
  )
}, {
  path: '/frontend',
  element: (
    <>
      <Loading />
      <Home />
    </>
  )
}])

export default router
