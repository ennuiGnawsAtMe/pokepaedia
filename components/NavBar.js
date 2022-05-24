import styles from '../styles/NavBar.module.css'
import Image from 'next/image'
import Link from 'next/link'

const NavBar = () => {

  return (
       <header className ={styles.container}>
          <Link href="/">
              <a>
              <div className={styles.title}>
                <span className={styles.logo}>
                    <Image 
                        src="https://img.pokemondb.net/artwork/large/ivysaur.jpg"
                        alt="PokéPaedia"
                        width={120}
                        height={100}
                    />
                </span>
                <div className={styles.titleText}>
                <h1>PokéPaedia</h1>
                <h3>An Encyclopaedia of Pokémon</h3>
                </div>
             </div>
             </a>
          </Link>
            <nav className={styles.nav}>
                <Link href="/search">
                  <a>
                    <button className={styles.button56} >SEARCH</button>
                  </a>
                </Link>
            </nav>
       </header>
  )
  }

export default NavBar