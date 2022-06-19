import { useState } from 'react'
import Image from 'next/image'
import { useAllPokemon } from '../lib/utils'
import CardStats from './CardStats'
import CardAbout from './CardAbout'
import CardTypes from './CardTypes'
import styles from '../styles/Card.module.css'
import CardRating from './CardRating'
import Link from 'next/link'

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
  const [cardFaceState, setCardFaceState] = useState('rate')
  const { pokemonDb, isLoading, isError } = useAllPokemon()

  const { pokedex, hp, image, name, blurb, colour, happiness, ability, shape, habitat, attack, defense, specialAttack, speed, weight, specialDefense, height, experience, type } = pokemon
  const { backgroundColor, color } = CARD_COLOURS[colour]

  const pokemonRatings = pokemonDb.find(poke => poke.pokedex === pokedex)
  const { ratingOverall, ratings, comments } = pokemonRatings
  
  
  const clickHandler = (component) => {
      setCardFaceState(component)
  }

  const cardFaceComponent = ({
      about: <CardAbout blurb={blurb} pokedex={pokedex} ratingOverall={ratingOverall} />,
      types: <CardTypes type={type} attack={attack} defense={defense} specialAttack={specialAttack} speed={speed} weight={weight} specialDefense={specialDefense} height={height} experience={experience} />,
      ability: <CardStats happiness={happiness} shape={shape} habitat={habitat} ability={ability} />,
      rate: <CardRating />,
      // comment:
  })

  return (
    <div style={{border:`solid 5px ${backgroundColor}`}} className={styles.container} >
      <div className={styles.topDetails}>
          <h3>1<sup>st</sup></h3>
        <div className={styles.imageText}>
          <h4>Stars:</h4><h3>{ratingOverall}</h3>
          <h4>Ratings:</h4><h3>{ratings.length}</h3>
          <h4>Pokédex:</h4><h3>{pokedex}</h3>
          <h4>hp:</h4><h3>{hp}</h3>
        </div>
      </div>
      <div className={styles.imageContainer} style={{cursor:`pointer`}}>
       <Link href={`/${name.toLowerCase()}`} passHref >
         <Image src={image} alt={name} layout="fill" objectFit='contain' />
       </Link>
      </div>
      <div className={styles.nameContainer}>
          <h2>{name}</h2>
      </div>
      {cardFaceComponent[cardFaceState]}
      <div style={{backgroundColor:`${backgroundColor}`}} className={styles.footer}>
        <ul>
          <li style={{color:`${color}`, cursor:`pointer`}} onClick={() => clickHandler('about')}>
            &gt; About
          </li>
          <li style={{color:`${color}`, cursor:`pointer`}} onClick={() => clickHandler('types')}>
            &gt; Type
          </li>
          <li style={{color:`${color}`, cursor:`pointer`}} onClick={() => clickHandler('ability')}>
            &gt; Ability
          </li>
           <li style={{color:`${color}`, cursor:`pointer`}} onClick={() => clickHandler('rate')}>
            &gt; Rate
          </li>
          <li style={{color:`${color}`, cursor:`pointer`}} onClick={() => clickHandler('comment')}>
            &gt; Comment
          </li>
        </ul>
      </div>
    </div>
  )
  }

export default Card
  