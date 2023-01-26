import Nav from './Nav'
import Welcome from './Welcome'
import SearchList from './SearchList'
import Control from './Control'

const Page = () => {
  return (
    <main className="flex max-w-[1920px] flex-col ">
      <div className="sticky top-0 z-10 flex min-h-[10vh] w-screen flex-row items-center justify-between bg-gradient-to-r from-blue-900 via-red-900 to-white shadow-lg shadow-red-500">
        <div className="ml-4 flex min-w-[50vw] flex-col">
          <Nav />
        </div>
        <div className="flex flex-col">
          <Welcome />
          <Control />
        </div>
      </div>
      <SearchList />
    </main>
  )
}

export default Page
