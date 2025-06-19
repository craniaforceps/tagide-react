import { Outlet, useNavigation } from 'react-router'
import Navbar from '../components/ui/Navbar'

const HomeLayout = () => {
  const navigation = useNavigation()

  const isPageLoading = navigation.state === 'loading'
  return (
    <>
      <Navbar />
      <section className="page">
        {isPageLoading ? <div className="loading" /> : <Outlet />}
      </section>
    </>
  )
}
export default HomeLayout
