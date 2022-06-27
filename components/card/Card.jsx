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

  const cardVariants = {
      hidden: {
        opacity: 0, 
        translateX: -50, 
        boxShadow: `3px 3px 5px rgb(0, 0, 0, 0.4)`
      },
      visible: {
        opacity: 1, 
        translateX: 0,
        transition: { duration: 0.3, delay: delay }
      },
      hover: {
        boxShadow: `5px 5px 5px rgb(0, 0, 0, 0.5)`,
        scale: 1.03,
      },
      exit: {
        opacity: 0,
        translateY: 500,
        transition: { duration: 0.3 }
      }
    }

  const buttonVariants = {
    visible: {
      backgroundColor: backgroundColor,
      color: color,
      border: `solid 2px ${backgroundColor}`,
      borderBottom: "none"
      
    },
    hover: {
        backgroundColor: "white",
        border: `solid 2px ${backgroundColor}`,
        borderBottom: "none",
        transition: { duration: 0.3 },
        color: "black",
      },
    tap: {
      scale: 0.95,
      transition: { duration: 0.01 }
    }
  }
  
  const clickHandler = () => {
      if (cardFace === 'image') {
        setCardFace("about")
      } else if (cardFace === "about") {
        setCardFace("types")
      } else if (cardFace === "types") {
        setCardFace("ability")
      } else if (cardFace === "ability") {
        setCardFace("image")
      }
  }

  const cardFaceComponent = ({
      about: <CardAbout {...pokemon} />,
      types: <CardTypes {...pokemon} />,
      ability: <CardStats {...pokemon} />,
      image: <CardImage {...pokemon} />,
  })

  return (
    <>
      <motion.div 
        style={{border:`solid 5px ${backgroundColor}`}} 
        className={styles.container}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        exit="exit"
      >
      <div className={styles.topDetails}>
          <span className={styles.rank}><h4>Rank:</h4><h3>{ranking}</h3></span>
        <div className={styles.imageText}>
          <h4>Stars:</h4><h3>{ratingOverall}</h3>
          <h4>Ratings:</h4><h3>{ratings.length}</h3>
          <h4>Pokédex:</h4><h3>{pokedex}</h3>
        </div>
      </div>
      { cardFaceComponent[cardFace] }
      <div className={ styles.footer }>
          <motion.button 
            style={{ cursor:`pointer` }} 
            variants={buttonVariants}
            animate="visible"
            whileHover="hover"
            whileTap="tap"
            >
            - Details -
          </motion.button>
          <motion.button 
            style={{ cursor:`pointer` }} 
            onClick={ () => clickHandler() }
            variants={buttonVariants}
            animate="visible"
            whileHover="hover"
            whileTap="tap"
            >
            - Flip -
          </motion.button>
          <motion.button 
            style={{ cursor:`pointer` }} 
            onClick={() => setIsOpen(true)}
            variants={buttonVariants}
            animate="visible"
            whileHover="hover"
            whileTap="tap"
            >
            - Rate -
          </motion.button>
      </div>
    </motion.div>
    <RatingModal handleClose={() => setIsOpen(false)} isOpen={isOpen} {...pokemon} {...pokemonRatings} />
  </>  
  )
  }

export default Card
  