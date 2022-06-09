import styles from '../styles/NavBar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import DropdownName from './DropdownName'
import { useContext, useState } from 'react'
import DropdownType from './DropdownType'
import DropdownHabitat from './DropdownHabitat'
import DropdownColour from './DropdownColour'
import pokemonImages from '../data/imgDictionary'
import allPokemonContext from '../context/allPokemonContext'
import pokemonCardsContext from '../context/pokemonCardsContext'

const NavBar = () => {
  const [dropdown, setDropdown] = useState('name')
  const [allPokemon, setAllPokemon] = useContext(allPokemonContext)
  const [pokemonCards, setPokemonCards] = useContext(pokemonCardsContext)

  const DROPDOWN_COMPONENTS = {
    'name': <DropdownName />,
    'type': <DropdownType />,
    'habitat': <DropdownHabitat />,
    'colour': <DropdownColour />,
  }

  const clickHandler = (dropdown) => {
    setDropdown(dropdown)
    setPokemonCards([])
  }

  return (
       <header className ={styles.container}>
          <Link href="/">
              <a>
              <div className={styles.title}>
                <span className={styles.logo}>
                    <Image 
                        src={pokemonImages.pichu}
                        alt='The Pokemon Encyclopaedia'
                        quality={100}
                        height={120}
                        width={120}
                        priority
                    />
                </span>
                <div className={styles.titleText}>
                <h1>PokéPaedia</h1>
                <h3>An Encyclopaedia of Pokémon</h3>
                </div>
             </div>
             </a>
          </Link>
          <div className={styles.navDropdown}>
            <nav className={styles.nav}>
              <ul>
                <li className={dropdown === "name" ? styles.active : undefined} onClick={() => clickHandler('name')}>
                  &gt;&gt;By Name
                </li>
                <li className={dropdown === "type" ? styles.active : undefined} onClick={() => clickHandler('type')}>
                  &gt;&gt;By Type
                </li>
                <li className={dropdown === "habitat" ? styles.active : undefined} onClick={() => clickHandler('habitat')}>
                  &gt;&gt;By Habitat
                </li>
                <li className={dropdown === "colour" ? styles.active : undefined} onClick={() => clickHandler('colour')}>
                  &gt;&gt;By Colour
                </li>
                {/* <li className={dropdown === "/pokemon/by-rating" ? styles.active : undefined} >
                  <Link href={"/pokemon/by-rating"}>&gt;&gt;By Rating</Link>
                </li> */}
                <button className={styles.login}>LOGIN</button>
              </ul>
            </nav>
              {DROPDOWN_COMPONENTS[dropdown]}
            </div>
       </header>
  )
  }

export default NavBar