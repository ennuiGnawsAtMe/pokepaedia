import Nav from './Nav'
import Welcome from './Welcome'
import SearchList from '../../components/utils/SearchList'

const Page = () => {
  return (
    <>
      <div className="top-0 flex min-h-[10vh] w-screen flex-row items-center justify-between bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg shadow-red-500">
        <Nav />
        <Welcome />
      </div>
      <SearchList />
    </>
  )
}

export default Page
