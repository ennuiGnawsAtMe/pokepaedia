import styles from '../styles/NavBar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import DropdownName from './DropdownName'
import { useContext, useState } from 'react'
import DropdownType from './DropdownType'
import DropdownHabitat from './DropdownHabitat'
import DropdownColour from './DropdownColour'
import logoContext from '../context/logoContext'
import allPokemonContext from '../context/allPokemonContext'

const NavBar = () => {
  const [dropdown, setDropdown] = useState('name')
  const [logo, setLogo] = useContext(logoContext)
  const [allPokemon, setAllPokemon] = useContext(allPokemonContext)

  const DROPDOWN_COMPONENTS = {
    'name': <DropdownName />,
    'type': <DropdownType />,
    'habitat': <DropdownHabitat />,
    'colour': <DropdownColour />,
  }

  return (
       <header className ={styles.container}>
          <Link href="/">
              <a>
              <div className={styles.title}>
                <span className={styles.logo}>
                    {logo !== '' && 
                    <Image 
                        src={logo}
                        alt='The Pokemon Encyclopaedia'
                        quality={100}
                        height={120}
                        width={120}
                        priority
                    />
                    }
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
                <li className={dropdown === "name" ? styles.active : undefined} >
                  &gt;&gt;By Name
                </li>
                <li className={dropdown === "type" ? styles.active : undefined} >
                  &gt;&gt;By Type
                </li>
                <li className={dropdown === "habitat" ? styles.active : undefined} >
                  &gt;&gt;By Habitat
                </li>
                <li className={dropdown === "colour" ? styles.active : undefined} >
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