'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import axios from 'axios'
import { getOrdinalNumbers } from '../../utils/helpers'
import { useGetAllPokemonDb } from '../../data/swr'
import styles from './UserRatingForm.module.css'
import ReactStars from 'react-rating-stars-component'

const buttonVariants = {
  hover: {
    backgroundColor: '#FFA500',
    transition: { duration: 0.1 },
  },
  tap: { scale: 1 },
}

const containerVariants = {
  hidden: {},
  visible: {},
}

const UserRatingForm = ({
  pokedex,
  formData,
  setFormData,
  setRatingComplete,
}) => {
  const { allPokemonDb, mutateAllPokemonDb } = useGetAllPokemonDb()

  const handleFormChange = e => {
    if (typeof e === 'number') {
      setFormData({
        ...formData,
        rating: e,
      })
    } else {
      const { name, value } = e.target
      setFormData({
        ...formData,
        [name]: value,
      })
    }
  }

  const handleFormSubmit = async e => {
    e.preventDefault()
    if (!formData.userName || !formData.comment) {
      alert('Make sure you enter your name and comment!')
    } else {
      setRatingComplete(true)

      const optimisticNoRank = allPokemonDb.map(poke => {
        if (poke.pokedex === pokedex) {
          const newRatings = [
            ...poke.ratings,
            {
              name: formData.userName,
              comment: formData.comment,
              pokedex: poke.pokedex,
              rating: formData.rating,
            },
          ]
          const newOverall =
            newRatings.reduce((total, current) => total + current.rating, 0) /
            newRatings.length
          const newOverallRating = Number(newOverall.toFixed(1))

          return {
            ...poke,
            ratings: newRatings,
            ratingOverall: newOverallRating,
          }
        }
        return poke
      })

      const sortedRanking = optimisticNoRank.sort(
        (a, b) =>
          b.ratingOverall - a.ratingOverall ||
          b.ratings.length - a.ratings.length ||
          a.pokedex - b.pokedex
      )

      const optimisticWithRank = sortedRanking.map(poke => ({
        ...poke,
        ranking: getOrdinalNumbers(sortedRanking.indexOf(poke) + 1),
      }))

      const payload = {
        pokedex: pokedex,
        name: formData.userName,
        comment: formData.comment,
        rating: formData.rating,
      }

      try {
        await mutateAllPokemonDb(() => optimisticWithRank, false)
        await axios.post('/api/ratings', payload)
      } catch (error) {
        console.error(error)
      }
    }
  }

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className={styles.starsWrapper}>
          <ReactStars
            size={40}
            value={formData.rating}
            color="gray"
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
            name="userName"
            value={formData.userName}
            autoFocus
            required
            onChange={e => handleFormChange(e)}
          />
          <textarea
            type="text"
            placeholder="Comment"
            name="comment"
            value={formData.comment}
            required
            onChange={e => handleFormChange(e)}
          />
          <motion.button
            type="submit"
            variants={buttonVariants}
            style={{ backgroundColor: '#47a8bd' }}
            whileHover="hover"
            whileTap="tap"
            onClick={handleFormSubmit}
          >
            Submit
          </motion.button>
        </form>
      </motion.div>
    </AnimatePresence>
  )
}
export default UserRatingForm
