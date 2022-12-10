'use client'

import { useContext } from 'react'
import dropdownContext from '../../context/dropdownContext'
import { typeOptions, statusOptions } from '../../utils/constants'

const Nav = () => {
  const [dropdown, setDropdown] = useContext(dropdownContext)

  // TODO useReducer to change dropdownContext object so it includes the values for
  // the dropdown and the category

  return (
    <>
      <nav className="flex w-[50vw]">
        <ul className="flex w-full cursor-pointer list-none flex-row justify-between  p-2 font-sans text-base text-white">
          <li
            onClick={() => setDropdown('Search by Ranking')}
            className="p-2 hover:text-lime-400 hover:overline"
          >
            Ranking
          </li>
          <li
            onClick={() => setDropdown('Search by Name')}
            className="p-2 hover:text-lime-400 hover:overline"
          >
            Name
          </li>
          <li
            onClick={() =>
              setDropdown({ searchBy: 'Search by Type', options: typeOptions })
            }
            className=" p-2 hover:text-lime-400 hover:overline"
          >
            Type
          </li>
          <li
            onClick={() => setDropdown('Search by Colour')}
            className="p-2 hover:text-lime-400 hover:overline"
          >
            Colour
          </li>
          <li
            onClick={() => setDropdown('Search by Ability')}
            className="p-2 hover:text-lime-400 hover:overline"
          >
            Ability
          </li>

          <li
            onClick={() =>
              setDropdown({
                searchBy: 'Search by Status',
                options: statusOptions,
              })
            }
            className="p-2 hover:text-lime-400 hover:overline"
          >
            Status
          </li>
          <li
            onClick={() => setDropdown('Search by Shape')}
            className="p-2 hover:text-lime-400 hover:overline"
          >
            Shape
          </li>
          <li
            onClick={() => setDropdown('Search by Habitat')}
            className="p-2 hover:text-lime-400 hover:overline"
          >
            Habitat
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Nav
