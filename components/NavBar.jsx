import styles from '../styles/NavBar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import DropdownName from './DropdownName'
import { useContext, useEffect, useState } from 'react'
import { goToTop } from '../lib/utils'
import DropdownType from './DropdownType'
import DropdownHabitat from './DropdownHabitat'
import DropdownShape from './DropdownShape'
import DropdownAbility from './DropdownAbility'
import DropdownColour from './DropdownColour'
import pokemonImages from '../data/imgDictionary'
import allPokemonContext from '../context/allPokemonContext'
import pokemonCardsContext from '../context/pokemonCardsContext'

const NavBar = () => {
  const router = useRouter()
  const { pokemon } = router.query
  const [dropshadow, setDropshadow] = useState(false)
  const [dropdown, setDropdown] = useState('name')
  const [allPokemon, setAllPokemon] = useContext(allPokemonContext)
  const [pokemonCards, setPokemonCards] = useContext(pokemonCardsContext)

  const DROPDOWN_COMPONENTS = {
    'name': <DropdownName />,
    'type': <DropdownType />,
    'habitat': <DropdownHabitat />,
    'colour': <DropdownColour />,
    'shape': <DropdownShape />,
    'ability': <DropdownAbility />,
  }

  const clickHandler = (dropdown) => {
    setDropdown(dropdown)
    setPokemonCards([])
  }

  useEffect(() => {
    goToTop()
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            setDropshadow(true);
        } else {
            setDropshadow(false);
        }
    })
  }, [pokemonCards])

  return (
       <header className={`${styles.container} ${dropshadow && styles.dropShadow}`}>
              <div className={styles.title}>
                <span className={styles.logo} >
                    <Link href="/"><a>
                      <Image 
                        src={pokemonImages.pichu}
                        alt='The Pokemon Encyclopaedia'
                        quality={100}
                        height={100}
                        width={100}
                        priority
                        onClick={() => clickHandler('name')}
                      />
                    </a></Link>
                </span>
                <div className={styles.titleText}>
                <h1>PokéPaedia</h1>
                <h3>An Encyclopaedia of Pokémon</h3>
                </div>
             </div>
          <div className={styles.navDropdown}>
            <nav className={styles.nav}>
              <Link href="/">
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
                  <li className={dropdown === "shape" ? styles.active : undefined} onClick={() => clickHandler('shape')}>
                    &gt;&gt;By Shape
                  </li>
                  <li className={dropdown === "evolution" ? styles.active : undefined} >
                    &gt;&gt;By Evolution
                  </li>
                  <li className={dropdown === "ability" ? styles.active : undefined} onClick={() => clickHandler('ability')}>
                    &gt;&gt;By Ability
                  </li>
                  {/* <li className={dropdown === "/pokemon/by-rating" ? styles.active : undefined} >
                    <Link href={"/pokemon/by-rating"}>&gt;&gt;By Rating</Link>
                  </li> */}
                  {/* <button className={styles.login}>LOGIN</button> */}
                </ul>
              </Link>
            </nav>
            <div className={styles.dropdownContainer}>
              {!pokemon ? DROPDOWN_COMPONENTS[dropdown] : <h3 style={{cursor:`pointer`}} onClick={() => router.back()}>&larr; back to list</h3>}
            </div>
         </div>
       </header>
  )
  }

export default NavBar