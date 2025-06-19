import { createBrowserRouter } from 'react-router'
import HomeLayout from './pages/HomeLayout'
import Landing from './pages/Landing'
import Sobre from './pages/Sobre'
import Museu from './pages/Museu'
import Arquivo from './pages/Arquivo'
import Error from './components/Error'
import Oficina from './pages/Oficina'
import Login from './pages/Login'
import Register from './pages/Register'
import Testes from './pages/Testes'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'museu',
        element: <Museu />,
      },
      {
        path: 'arquivo',
        element: <Arquivo />,
      },
      {
        path: 'oficina',
        element: <Oficina />,
      },
      {
        path: 'sobre',
        element: <Sobre />,
      },
      {
        path: 'testes',
        element: <Testes />,
      },
    ],
  },
  { path: 'login', element: <Login /> },
  { path: 'register', element: <Register /> },
])

export default router
