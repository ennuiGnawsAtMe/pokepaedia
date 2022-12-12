'use client'

import { useContext } from 'react'
import dropdownContext from '../../context/dropdownContext'
import NameSelect from './NameSelect'
import AbilitySelect from './AbilitySelect'
import RankingSelect from './RankingSelect'
import ShapeSelect from './ShapeSelect'
import ColourSelect from './ColourSelect'
import StatusSelect from './StatusSelect'
import TypeSelect from './TypeSelect'
import HabitatSelect from './HabitatSelect'

const Nav = () => {
  const [dropdown, setDropdown] = useContext(dropdownContext)

  const getDropdown = () => {
    switch (dropdown) {
      case 'name':
        return <NameSelect />
      case 'type':
        return <TypeSelect />
      case 'habitat':
        return <HabitatSelect />
      case 'colour':
        return <ColourSelect />
      case 'shape':
        return <ShapeSelect />
      case 'ability':
        return <AbilitySelect />
      case 'status':
        return <StatusSelect />
      case 'rank':
        return <RankingSelect />
      default:
        null
    }
  }

  return (
    <>
      <nav className="flex min-h-[130px] w-[50vw] flex-col">
        <ul className="flex w-full cursor-pointer list-none flex-row justify-between  p-2 font-sans text-base text-white">
          <li
            onClick={() => setDropdown('name')}
            className={`${
              dropdown === 'name' ? 'text-lime-400 overline' : null
            } p-2 hover:text-lime-400 hover:overline`}
          >
            Name
          </li>
          <li
            onClick={() => setDropdown('ranking')}
            className={`${
              dropdown === 'ranking' ? 'text-lime-400 overline' : null
            } p-2 hover:text-lime-400 hover:overline`}
          >
            Ranking
          </li>
          <li
            onClick={() => setDropdown('type')}
            className={`${
              dropdown === 'type' ? 'text-lime-400 overline' : null
            } p-2 hover:text-lime-400 hover:overline`}
          >
            Type
          </li>
          <li
            onClick={() => setDropdown('colour')}
            className={`${
              dropdown === 'colour' ? 'text-lime-400 overline' : null
            } p-2 hover:text-lime-400 hover:overline`}
          >
            Colour
          </li>
          <li
            onClick={() => setDropdown('ability')}
            className={`${
              dropdown === 'ability' ? 'text-lime-400 overline' : null
            } p-2 hover:text-lime-400 hover:overline`}
          >
            Ability
          </li>

          <li
            onClick={() => setDropdown('status')}
            className={`${
              dropdown === 'status' ? 'text-lime-400 overline' : null
            } p-2 hover:text-lime-400 hover:overline`}
          >
            Status
          </li>
          <li
            onClick={() => setDropdown('shape')}
            className={`${
              dropdown === 'shape' ? 'text-lime-400 overline' : null
            } p-2 hover:text-lime-400 hover:overline`}
          >
            Shape
          </li>
          <li
            onClick={() => setDropdown('habitat')}
            className={`${
              dropdown === 'habitat' ? 'text-lime-400 overline' : null
            } p-2 hover:text-lime-400 hover:overline`}
          >
            Habitat
          </li>
        </ul>
        <div className="mx-4 mt-2 mb-4">
          {dropdown != '' ? (
            getDropdown()
          ) : (
            <h3 className=" text-2xl text-lime-400">
              Choose a categegory to search by...
            </h3>
          )}
        </div>
      </nav>
    </>
  )
}

export default Nav
