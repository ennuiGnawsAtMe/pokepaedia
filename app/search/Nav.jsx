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
import pokemonCardsContext from '../../context/pokemonCardsContext'

const Nav = () => {
  const [dropdown, setDropdown] = useContext(dropdownContext)
  const [pokemonCards, setPokemonCards] = useContext(pokemonCardsContext)

  const clickHandler = dropdown => {
    setDropdown(dropdown)
    setPokemonCards([])
  }

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
      case 'ranking':
        return <RankingSelect />
      default:
        null
    }
  }

  return (
    <>
      <nav className="flex min-h-[150px] w-full flex-col pt-4">
        <ul className="flex w-full cursor-pointer list-none flex-row justify-start pl-4 font-sans text-base text-white md:space-x-4 lg:space-x-2 lg:text-lg xl:space-x-2 xl:text-lg">
          <li
            onClick={() => clickHandler('name')}
            className={`${
              dropdown === 'name' ? 'font-semibold overline' : null
            } p-2 hover:font-semibold hover:overline`}
          >
            Name
          </li>
          <li
            onClick={() => clickHandler('ranking')}
            className={`${
              dropdown === 'ranking' ? 'font-semibold overline' : null
            } p-2 hover:font-semibold hover:overline`}
          >
            Ranking
          </li>
          <li
            onClick={() => clickHandler('type')}
            className={`${
              dropdown === 'type' ? 'font-semibold overline' : null
            } p-2 hover:font-semibold hover:overline`}
          >
            Type
          </li>
          <li
            onClick={() => clickHandler('colour')}
            className={`${
              dropdown === 'colour' ? 'font-semibold overline' : null
            } p-2 hover:font-semibold hover:overline`}
          >
            Colour
          </li>
          <li
            onClick={() => clickHandler('ability')}
            className={`${
              dropdown === 'ability' ? 'font-semibold overline' : null
            } p-2 hover:font-semibold hover:overline`}
          >
            Ability
          </li>

          <li
            onClick={() => clickHandler('status')}
            className={`${
              dropdown === 'status' ? 'font-semibold overline' : null
            } p-2 hover:font-semibold hover:overline`}
          >
            Status
          </li>
          <li
            onClick={() => clickHandler('shape')}
            className={`${
              dropdown === 'shape' ? 'font-semibold overline' : null
            } p-2 hover:font-semibold hover:overline`}
          >
            Shape
          </li>
          <li
            onClick={() => clickHandler('habitat')}
            className={`${
              dropdown === 'habitat' ? 'font-semibold overline' : null
            } p-2 hover:font-semibold hover:overline`}
          >
            Habitat
          </li>
        </ul>
        <div className=" mx-4 mt-2 mb-4">{getDropdown()}</div>
      </nav>
    </>
  )
}

export default Nav
