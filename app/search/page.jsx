import Nav from './Nav'
import Welcome from './Welcome'
import SearchList from './SearchList'
import Control from './Control'

const Page = () => {
  return (
    <main className="flex w-screen flex-col">
      <div className="sticky top-0 z-10  w-screen bg-gradient-to-r from-blue-900 via-lime-600 to-red-900 shadow-md shadow-slate-900">
        <div className="m-auto flex max-w-[1920px] flex-row justify-between">
          <div className="ml-2 flex flex-col pb-4">
            <Nav />
            <Control />
          </div>
          <div className="flex flex-col ">
            <Welcome />
          </div>
        </div>
      </div>
      <SearchList />
    </main>
  )
}

export default Page
