import Link from 'next/link' 
import Image from 'next/image'
import axios from 'axios'
import { useState, useEffect } from 'react'
import ReactStars from 'react-rating-stars-component'
import styles from '../styles/CardBlurb.module.css'

const CardBlurb = ({ pokemon, colour, flip }) => {
    const { backgroundColor, color } = colour
    const { pokedex, hp, image, name, blurb, } = pokemon
    const [rating, setRating] = useState()
    const [votes, setvotes] = useState()

    const changeHandler = async (newRating) => {
      const payload = {
        pokedex: pokemon.pokedex,
        userId: 1,
        rating: newRating
      }
      try {
        const res = await axios.post('/api/ratings/update-ratings', payload)
        setRating(res.data.ratingOverall)
        setvotes(res.data.ratings.length)
      } catch (error) {
        console.error(error)
      }
    }

    const getinitRating = async (pokedex) => {
      const { data } = await axios.get(`/api/ratings/${pokedex}`)
      setRating(data.ratingOverall)
      setvotes(data.ratings.length)
    }

    useEffect(() => {
      getinitRating(pokedex)
    }, [])

  return (
    <div style={{border:`solid 5px ${backgroundColor}`}} className={styles.container} >
      <div className={styles.topDetails}>
        {/* {pokemon.evolvesFrom ? <h3>EVOLUTION</h3> : <h3>BASIC</h3>} */}
        <ReactStars key={rating} size={10} value={rating} edit={false} isHalf={true} />
        <p>{rating}</p>
        <p>{votes}</p>
        <div className={styles.imageText}>
          <h4>Pokédex:</h4><h3>{pokedex}</h3>
          <h4>hp:</h4><h3>{hp}</h3>
        </div>
      </div>
      <div className={styles.imageContainer} style={{cursor:`pointer`}}>
        <Image 
          src={image} 
          alt={name}
          layout="fill" 
          objectFit='contain'
          onClick={flip}
        />
      </div>
      <div className={styles.nameContainer}>
          <h2>{name}</h2>
      </div>
          <ReactStars size={20} value={0} onChange={newValue => changeHandler(newValue)} />
      <div className={styles.details}>
        <div className={styles.detailsTop}>
          <p>{blurb}</p> 
        </div>
      </div> 
      <div style={{backgroundColor:`${backgroundColor}`}} className={styles.footer}>
          <button style={{color:`${color}`, cursor:`pointer`}} onClick={flip}>Flip Card!</button>
          <button style={{color:`${color}`, cursor:`pointer`}}>
            <Link href={`/${name.toLowerCase()}`}><a>Pokémon Details</a></Link>
          </button>
      </div>
    </div>
  )
  }

export default CardBlurb