import { createBrowserRouter } from 'react-router-dom'
import Loading from '../layouts/Loading'
import Home from '../pages/Home'

const router = createBrowserRouter([{
  path: '/',
  element: (
    <>
      <Loading />
      <Home />
    </>
  )
}])

export default router
