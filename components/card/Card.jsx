import { useState } from 'react'
import { motion } from "framer-motion"
import { useGetAllPokemonDb } from '../../lib/swr/useGetAllPokemonDb'
import CardStats from './CardStats'
import CardAbout from './CardAbout'
import CardTypes from './CardTypes'
import styles from './Card.module.css'
import CardRating from './CardRating'
import CardImage from './CardImage'
import RatingModal from '../modal/Modal'

const CARD_COLOURS = {
    'red': {backgroundColor: '#AB1E23', color: 'white'},
    'blue': {backgroundColor:'#1452E2', color: 'white'},
    'yellow': {backgroundColor:'#E3E32A', color: 'black'},
    'green': {backgroundColor:'#147B3E', color: 'white'},
    'black':{backgroundColor:'#313639', color: 'white'},
    'brown': {backgroundColor:'#994022', color: 'white'},
    'purple': {backgroundColor:'#5E2E87', color: 'white'},
    'gray': {backgroundColor:'#D1D1E0', color: 'black'},
    'white': {backgroundColor:'#f5f5f5', color: 'black'},
    'pink': {backgroundColor:'#A72B6E', color: 'white'}
    }

const Card = ({ pokemon, delay }) => {
  const [cardFace, setCardFace] = useState('image')
  const [isOpen, setIsOpen] = useState(false)
  const { allPokemonDb, isLoading, isError } = useGetAllPokemonDb()

  const { pokedex, colour } = pokemon

  const { backgroundColor, color } = CARD_COLOURS[colour]

  const pokemonRatings = allPokemonDb.find(poke => poke.pokedex === pokedex)
  const { ratingOverall, ratings, ranking } = pokemonRatings
  
  const clickHandler = (component) => {
      setCardFace(component) 
  }

  const cardFaceComponent = ({
      about: <CardAbout {...pokemon} />,
      types: <CardTypes {...pokemon} />,
      ability: <CardStats {...pokemon} />,
      rate: <CardRating {...pokemon} />,
      image: <CardImage {...pokemon} />,
  })

  return (
    <>
      <motion.div 
        style={{border:`solid 5px ${backgroundColor}`}} 
        className={styles.container}
        initial={{ 
          opacity: 0, 
          translateX: -50, 
          boxShadow: `3px 3px 5px rgb(0, 0, 0, 0.4)`
          
        }}
        animate={{ 
          opacity: 1, 
          translateX: -0,
          transition: { duration: 0.8, delay: delay }
        }} 
        whileHover={{
          boxShadow: `5px 5px 5px rgb(0, 0, 0, 0.5)`,
          scale: 1.03,
        }}
        >
      <div className={styles.topDetails}>
          <span className={styles.rank}><h4>Rank:</h4><h3>{ranking}</h3></span>
        <div className={styles.imageText}>
          <h4>Stars:</h4><h3>{ratingOverall}</h3>
          <h4>Ratings:</h4><h3>{ratings.length}</h3>
          <h4>Pokédex:</h4><h3>{pokedex}</h3>
        </div>
      </div>
      {cardFaceComponent[cardFace]}
      <div style={{backgroundColor:`${backgroundColor}`}} className={styles.footer}>
        <ul>
          <li 
            className={cardFace === 'image' ? styles.active : undefined} 
            style={{backgroundColor: `${backgroundColor}`, color:`${color}`, cursor:`pointer`}} 
            onClick={() => clickHandler('image')}
            >
            Image
          </li>
          <li 
            className={cardFace === 'about' ? styles.active : undefined} 
            style={{backgroundColor: `${backgroundColor}`, color:`${color}`, cursor:`pointer`}} 
            onClick={() => clickHandler('about')}
            >
            About
          </li>
          <li 
            className={cardFace === 'types' ? styles.active : undefined} 
            style={{backgroundColor: `${backgroundColor}`, color:`${color}`, cursor:`pointer`}} 
            onClick={() => clickHandler('types')}
            >
            Type
          </li>
          <li 
            className={cardFace === 'ability' ? styles.active : undefined} 
            style={{backgroundColor: `${backgroundColor}`, color:`${color}`, cursor:`pointer`}} 
            onClick={() => clickHandler('ability')}
            >
            Ability
          </li>
           <motion.button 
            className={cardFace === 'rate' ? styles.active : undefined} 
            style={{backgroundColor: `${backgroundColor}`, color:`${color}`, cursor:`pointer`}} 
            onClick={() => setIsOpen(true)}
            >
            Rate
          </motion.button>
        </ul>
      </div>
    </motion.div>
    <RatingModal handleClose={() => setIsOpen(false)} isOpen={isOpen} {...pokemon} {...pokemonRatings} />
  </>
  )
  }

export default Card
  