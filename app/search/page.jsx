import Nav from './Nav'
import Welcome from './Welcome'
import SearchList from '../../components/utils/SearchList'
import InputDRopdown from './InputDropdown'
import SelectDropdown from './SelectDropdown'

const Page = () => {
  return (
    <>
      <div className="top-0 flex min-h-[10vh] w-screen flex-row items-center justify-between bg-gradient-to-r from-blue-900 to-blue-400 shadow-lg shadow-red-500">
        <div className="ml-4 flex min-w-[50vw] flex-col">
          <Nav />
          <SelectDropdown />
        </div>
        <Welcome />
      </div>
      <SearchList />
    </>
  )
}

export default Page
