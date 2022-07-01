import Image from "next/image"
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import axios from 'axios'
import { getOrdinalNumbers } from "../../lib/funcs"
import { useGetAllPokemonDb } from "../../lib/swr/useGetAllPokemonDb"
import styles from './Modal.module.css'
import ReactStars from "react-rating-stars-component"

const backdropVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
  }  
  
const buttonVariants = {
  hover: { 
    backgroundColor: "#FFA500",
    transition: { duration: 0.1 }
  },
  tap: { scale: 1 }
}

const initialData = {
  rating: 0,
  name: '',
  comment: ''
 }

const Modal = ({ showModal, setShowModal, ratingOverall, ratings, name, pokedex, blurb, image, ranking }) => {
  const [formData, setFormData] = useState(initialData)
  const { allPokemonDb, mutateAllPokemonDb } = useGetAllPokemonDb()

  const handleParentClick = event => {
    event.preventDefault()

    if (event.target === event.currentTarget) {
      setShowModal(false)
    }
  }

  const handleChildClick = event => {
    event.stopPropagation()
    // logic goes here
  }

  const handleFormChange = (e) => {
    if (typeof e === 'number') {
      setFormData({
        ...formData,
        rating: e
      })
    } else {
    const { name, value } = e.target
    setFormData({
      ...formData, 
      [name]: value 
    })
  }
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    setFormData(initialData)

    const optimisticNoRank = allPokemonDb.map(poke => {
      if (poke.pokedex === pokedex) {
        const newRatings = [...poke.ratings, {
          name: formData.name, 
          comment: formData.comment, 
          pokedex: poke.pokedex, 
          rating: formData.rating
        }]
        const newOverall = newRatings.reduce((total, current) => total + current.rating, 0) / newRatings.length
        const newOverallRating = Number(newOverall.toFixed(1))
        
        return { 
          ...poke,
          ratings: newRatings,
          ratingOverall: newOverallRating
        }
      }
        return poke
    })

    const sortedRanking = optimisticNoRank.sort((a, b) => {
      b.ratingOverall - a.ratingOverall 
        || b.ratings.length - a.ratings.length 
        || a.pokedex - b.pokedex
    })

    const optimisticWithRank = sortedRanking.map(poke => ({
       ...poke, 
       ranking: getOrdinalNumbers(sortedRanking.indexOf(poke) + 1) 
    }))

    const payload = {
      pokedex: pokedex,
      name: formData.name,
      comment: formData.comment,
      rating: formData.rating,
    }

    try {
      const apiRes = await axios.post('/api/ratings', payload)
      const updatedPokemon = await mutateAllPokemonDb(optimisticWithRank)            
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <AnimatePresence >
      {showModal &&  (
        <motion.div className={styles.backdrop}
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={handleParentClick}
        >   
          <motion.div className={styles.modal} onClick={handleChildClick} >
          <div className={styles.modalContent}>
            <div className={styles.imageWrapper}>
              <Image 
                src={image} 
                alt={name} 
                layout="fill" 
                objectFit='contain' 
              />
            </div>
            <div className={styles.detailsContainer}>
              <div className={styles.pokemonDetails}>
                <div className={styles.nameContainer}>
                  <div className={styles.nameWrapper}>
                    <h1>{name}</h1>
                  </div>
                  <div className={styles.rankingContainer}>
                    <p>Ranked</p>
                    <h2>{ranking}</h2>
                  </div>
                </div>
                <div className={styles.overallStars}>
                <ReactStars 
                  size={20} 
                  key={ratings.length}
                  value={ratingOverall} 
                  edit={false} 
                  isHalf={true} 
                />
                </div>
                <h4>{ratingOverall} stars from {ratings.length} ratings</h4>
                <div className={styles.blurbWrapper}>
                  <p>{blurb}</p>
                  <h1>{}</h1>
                </div>
              </div>
              
              <div className={styles.userRatingContainer}>
                {!formData.rating 
                  ? <h3>Your Rating</h3> 
                  : <h3>You gave {name} {formData.rating} {formData.rating === 1 
                    ? "star!" 
                    : "stars!"} </h3>
                }
                <div className={styles.starsWrapper}>
                  <ReactStars 
                    size={40} 
                    value={formData.rating}
                    key={ratings.length} 
                    onChange={e => handleFormChange(e)} 
                  />
                </div>
              <form 
                className={styles.formWrapper} 
                action="/api/ratings" 
                method="post"
                onSubmit={e => e.preventDefault()}
              >
                  <input 
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={formData.name}
                    autoFocus
                    required
                    onChange={(e => handleFormChange(e))}
                    />
                  <textarea 
                    type="text" 
                    placeholder="Comment"
                    name="comment"
                    value={formData.comment}
                    required
                    onChange={(e => handleFormChange(e))}
                    />
                  <motion.button
                    type="submit"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    onClick={handleFormSubmit}
                    >Submit
                  </motion.button>
              </form>
            </div> 
            </div>
          </div>
        </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
export default Modal