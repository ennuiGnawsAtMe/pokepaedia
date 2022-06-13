import Link from 'next/link' 
import Image from 'next/image'
import axios from 'axios'
import ReactStars from 'react-rating-stars-component'
import styles from '../styles/CardBlurb.module.css'

const CardBlurb = ({ pokemon, colour, flip }) => {
    const { backgroundColor, color } = colour

    const changeHandler = async (newRating) => {
      const payload = {
        pokedex: pokemon.pokedex,
        userId: 1,
        rating: newRating
      }
      try {
        // const test = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/1/`)
        const res = await axios.get('http://localhost:3000/api/test')
        console.log(res.data)
      } catch (error) {
        console.error(error)
      }
    }

  return (
    <div style={{border:`solid 5px ${backgroundColor}`}} className={styles.container} >
      <div className={styles.topDetails}>
        {pokemon.evolvesFrom ? <h3>EVOLUTION</h3> : <h3>BASIC</h3>}
        <div className={styles.imageText}>
        <h4>Pokédex:</h4><h3>{pokemon.pokedex}</h3>
        <h4>hp:</h4><h3>{pokemon.hp}</h3>
        </div>
      </div>
        <div className={styles.imageContainer} style={{cursor:`pointer`}}>
          <Image 
          src={pokemon.image} 
          alt={pokemon.name}
          layout="fill" 
          objectFit='contain'
          onClick={flip}
          />
        </div>
          <div className={styles.nameContainer}>
            <h2>{pokemon.name}</h2>
          </div>
          <ReactStars
              size={20}
              value={0}
              onChange={newValue => changeHandler(newValue)}
              />
        <div className={styles.details}>
        <div className={styles.detailsTop}>
            <p>{pokemon.blurb}</p> 
        </div>
          </div> 
          <div style={{backgroundColor:`${backgroundColor}`}} className={styles.footer}>
           <button style={{color:`${color}`, cursor:`pointer`}} onClick={flip}>Flip Card!</button>
           <button style={{color:`${color}`, cursor:`pointer`}}>
             <Link href={`/${pokemon.name.toLowerCase()}`}><a>Pokémon Details</a></Link>
           </button>
          </div>
      </div>
  )
  }

export default CardBlurb