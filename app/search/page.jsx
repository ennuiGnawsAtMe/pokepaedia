import Nav from './Nav'
import Welcome from './Welcome'
import SearchList from './SearchList'
import Control from './Control'

const Page = () => {
  return (
    <main className="flex flex-col">
      <div className="sticky top-0 z-10 min-h-[10vh] w-screen bg-gradient-to-r from-blue-900 via-lime-600 to-red-900 shadow-2xl shadow-slate-900">
        <div className="m-auto flex max-w-[1920px] flex-row items-center justify-between">
          <div className="ml-4 flex flex-col">
            <Nav />
          </div>
          <div className="flex flex-col">
            <Welcome />
            <Control />
          </div>
        </div>
      </div>
      <SearchList />
    </main>
  )
}

export default Page
