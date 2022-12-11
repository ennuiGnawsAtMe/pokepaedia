'use client'

import { useContext } from 'react'
import dropdownContext from '../../context/dropdownContext'
import {
  typeOptions,
  statusOptions,
  nameOptions,
  rankOptions,
} from '../../utils/constants'

const Nav = () => {
  const [dropdown, setDropdown] = useContext(dropdownContext)

  return (
    <>
      <nav className="flex w-[50vw]">
        <ul className="flex w-full cursor-pointer list-none flex-row justify-between  p-2 font-sans text-base text-white">
          <li
            onClick={() =>
              setDropdown({
                selected: 'Search by Ranking...',
                options: rankOptions,
              })
            }
            className="p-2 hover:text-lime-400 hover:overline"
          >
            Ranking
          </li>
          <li
            onClick={() =>
              setDropdown({
                selected: 'Search by Name...',
                options: nameOptions,
              })
            }
            className="p-2 hover:text-lime-400 hover:overline"
          >
            Name
          </li>
          <li
            onClick={() =>
              setDropdown({
                selected: 'Search by Type',
                options: typeOptions,
              })
            }
            className=" p-2 hover:text-lime-400 hover:overline"
          >
            Type
          </li>
          <li
            onClick={() =>
              setDropdown({
                selected: 'Search by Colour...',
                options: typeOptions,
              })
            }
            className="p-2 hover:text-lime-400 hover:overline"
          >
            Colour
          </li>
          <li
            onClick={() =>
              setDropdown({
                selected: 'Search by Ability...',
                options: typeOptions,
              })
            }
            className="p-2 hover:text-lime-400 hover:overline"
          >
            Ability
          </li>

          <li
            onClick={() =>
              setDropdown({
                selected: 'Search by Status...',
                options: statusOptions,
              })
            }
            className="p-2 hover:text-lime-400 hover:overline"
          >
            Status
          </li>
          <li
            onClick={() =>
              setDropdown({
                selected: 'Search by Shape...',
                options: typeOptions,
              })
            }
            className="p-2 hover:text-lime-400 hover:overline"
          >
            Shape
          </li>
          <li
            onClick={() =>
              setDropdown({
                selected: 'Search by Habitat...',
                options: typeOptions,
              })
            }
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
