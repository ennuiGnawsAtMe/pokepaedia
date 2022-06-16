import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useAllPokemon } from '../lib/utils'
import ReactStars from 'react-rating-stars-component'
import CardStats from './CardStats'
import CardBlurb from './CardBlurb'
import CardTypes from './CardTypes'
import styles from '../styles/Card.module.css'

  const CARD_COLOURS = {
  'red': {backgroundColor: '#AB1E23', color: 'white'},
  'blue': {backgroundColor:'#1452E2', color: 'white'},
  'yellow': {backgroundColor:'#E3E32A', color: 'black'},
  'green': {backgroundColor:'#147B3E', color: 'white'},
  'black':{backgroundColor:'#BBBBBB', color: 'black'},
  'brown': {backgroundColor:'#994022', color: 'white'},
  'purple': {backgroundColor:'#5E2E87', color: 'white'},
  'gray': {backgroundColor:'#D1D1E0', color: 'black'},
  'white': {backgroundColor:'#fefefe', color: 'black'},
  'pink': {backgroundColor:'#A72B6E', color: 'white'}
  }

const Card = ({ pokemon }) => {
  const [isFlipped, setIsFlipped] = useState('blurb')
  const { pokemonDb, isLoading, isError } = useAllPokemon()

  const { pokedex, hp, image, name, blurb, colour, happiness, ability, shape, habitat, attack, defense, specialAttack, speed, weight, specialDefense, height, experience, type } = pokemon
  const { backgroundColor, color } = CARD_COLOURS[colour]

  const pokemonRatings = pokemonDb.find(poke => poke.pokedex === pokedex)
  const { ratingOverall, ratings, comments } = pokemonRatings
  
  
  const flipHandler = () => {
    if (isFlipped == 'blurb') {
      setIsFlipped('types')
    } else if (isFlipped == 'types') {
      setIsFlipped('stats')
    } else if (isFlipped =='stats') {
      setIsFlipped('blurb')
    }
  }

  const getComponent = ({
      blurb: <CardBlurb blurb={blurb} pokedex={pokedex} />,
      types: <CardTypes type={type} attack={attack} defense={defense} specialAttack={specialAttack} speed={speed} weight={weight} specialDefense={specialDefense} height={height} experience={experience} />,
      stats: <CardStats happiness={happiness} shape={shape} habitat={habitat} ability={ability} />
  })

  return (
    <div style={{border:`solid 5px ${backgroundColor}`}} className={styles.container} >
      <div className={styles.topDetails}>
          <ReactStars key={ratingOverall} size={10} value={ratingOverall} edit={false} isHalf={true} />
        <div className={styles.imageText}>
          <h4>Stars:</h4><h3>{ratingOverall}</h3>
          <h4>Ratings:</h4><h3>{ratings.length}</h3>
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
          onClick={flipHandler}
        />
      </div>
      <div className={styles.nameContainer}>
          <h2>{name}</h2>
      </div>
      {getComponent[isFlipped]}
      <div style={{backgroundColor:`${backgroundColor}`}} className={styles.footer}>
        <ul>
          <li style={{color:`${color}`, cursor:`pointer`}} onClick={flipHandler}>
            &gt;Flip Card
          </li>
          <li style={{color:`${color}`, cursor:`pointer`}} >
            <Link href={`/${name.toLowerCase()}`}>
              <a>&gt;Pokémon Details</a>
            </Link>
          </li>
           <li style={{color:`${color}`, cursor:`pointer`}} onClick={flipHandler}>
            &gt;Leave Comment
          </li>
        </ul>
      </div>
    </div>
  )
  }

  

export default Card
  