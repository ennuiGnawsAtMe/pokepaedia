'use client'

import { useContext } from 'react'
import dropdownContext from '../../context/dropdownContext'

const Nav = () => {
  const [dropdown, setDropdown] = useContext(dropdownContext)

  return (
    <>
      <nav className="flex w-[50vw]">
        <ul className="flex w-full cursor-pointer list-none flex-row justify-between  p-2 font-sans text-base text-white">
          <li
            onClick={() => setDropdown('Name')}
            className="p-2 hover:text-lime-400 hover:overline"
          >
            Name
          </li>
          <li
            onClick={() => setDropdown('Type')}
            className=" p-2 hover:text-lime-400 hover:overline"
          >
            Type
          </li>
          <li
            onClick={() => setDropdown('Colour')}
            className="p-2 hover:text-lime-400 hover:overline"
          >
            Colour
          </li>
          <li
            onClick={() => setDropdown('Ability')}
            className="p-2 hover:text-lime-400 hover:overline"
          >
            Ability
          </li>
          <li
            onClick={() => setDropdown('Ranking')}
            className="p-2 hover:text-lime-400 hover:overline"
          >
            Ranking
          </li>
          <li
            onClick={() => setDropdown('Status')}
            className="p-2 hover:text-lime-400 hover:overline"
          >
            Status
          </li>
          <li
            onClick={() => setDropdown('Shape')}
            className="p-2 hover:text-lime-400 hover:overline"
          >
            Shape
          </li>
          <li
            onClick={() => setDropdown('Habitat')}
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
