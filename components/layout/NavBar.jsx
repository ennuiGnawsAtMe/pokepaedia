'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import { motion, useScroll } from 'framer-motion'
import styles from './NavBar.module.css'
import pokemonImages from '../../data/imgDictionary'
import pokemonCardsContext from '../../context/pokemonCardsContext.js'
import NameSelect from '../dropdown/NameSelect'
import TypeSelect from '../dropdown/TypeSelect'
import AbilitySelect from '../../app/search/AbilitySelect'
import ColourSelect from '../dropdown/ColourSelect'
import HabitatSelect from '../dropdown/HabitatSelect'
import StatusSelect from '../dropdown/StatusSelect'
import ShapeSelect from '../dropdown/ShapeSelect'
import RankingSelect from '../dropdown/RankingSelect'
import dropdownContext from '../../context/dropdownContext'

const NavBar = ({ options, allPokemon }) => {
  const [dropshadow, setDropshadow] = useState(false)
  const [dropdown, setDropdown] = useContext(dropdownContext)
  const [pokemonCards, setPokemonCards] = useContext(pokemonCardsContext)
  const router = useRouter()
  const { pokemon } = router.query
  const { scrollYProgress } = useScroll()

  const DROPDOWN_COMPONENTS = {
    name: <NameSelect options={options.nameOptions} allPokemon={allPokemon} />,
    type: <TypeSelect options={options.typeOptions} allPokemon={allPokemon} />,
    habitat: (
      <HabitatSelect options={options.habitatOptions} allPokemon={allPokemon} />
    ),
    colour: (
      <ColourSelect options={options.colourOptions} allPokemon={allPokemon} />
    ),
    shape: (
      <ShapeSelect options={options.shapeOptions} allPokemon={allPokemon} />
    ),
    ability: (
      <AbilitySelect options={options.abilityOptions} allPokemon={allPokemon} />
    ),
    status: (
      <StatusSelect options={options.statusOptions} allPokemon={allPokemon} />
    ),
    rank: <RankingSelect allPokemon={allPokemon} />,
  }

  const clickHandler = dropdown => {
    setDropdown(dropdown)
    setPokemonCards([])
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 60) {
        setDropshadow(true)
      } else {
        setDropshadow(false)
      }
    })
  })

  return (
    <motion.header
      className={`${styles.container} ${
        dropshadow ? styles.dropShadow : undefined
      }`}
      initial={{ y: -150 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <nav className={styles.nav}>
        <Link href="/" legacyBehavior>
          <ul className={styles.navItems}>
            <li
              className={dropdown === 'name' ? styles.active : undefined}
              onClick={() => clickHandler('name')}
            >
              &gt;Name
            </li>
            <li
              className={dropdown === 'rank' ? styles.active : undefined}
              onClick={() => clickHandler('rank')}
            >
              &gt;Ranking
            </li>
            <li
              className={dropdown === 'type' ? styles.active : undefined}
              onClick={() => clickHandler('type')}
            >
              &gt;Type
            </li>
            <li
              className={dropdown === 'habitat' ? styles.active : undefined}
              onClick={() => clickHandler('habitat')}
            >
              &gt;Habitat
            </li>
            <li
              className={dropdown === 'colour' ? styles.active : undefined}
              onClick={() => clickHandler('colour')}
            >
              &gt;Colour
            </li>
            <li
              className={dropdown === 'shape' ? styles.active : undefined}
              onClick={() => clickHandler('shape')}
            >
              &gt;Shape
            </li>
            <li
              className={dropdown === 'evolution' ? styles.active : undefined}
              onClick={() => clickHandler('status')}
            >
              &gt;Status
            </li>
            <li
              className={dropdown === 'ability' ? styles.active : undefined}
              onClick={() => clickHandler('ability')}
            >
              &gt;Ability
            </li>
          </ul>
        </Link>
      </nav>
      <div className={styles.selectWrapper}>
        {DROPDOWN_COMPONENTS[dropdown]}
      </div>
    </motion.header>
  )
}

export default NavBar
