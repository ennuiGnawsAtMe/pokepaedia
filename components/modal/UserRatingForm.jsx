'use client'

import { useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import axios from 'axios'
import userContext from '../../context/userContext'
import { getOrdinalNumbers } from '../../utils/helpers'
import { useGetAllPokemonDb } from '../../data/swr'
import ReactStars from 'react-rating-stars-component'

const buttonVariants = {
  hover: {
    backgroundColor: '#FFA500',
    transition: { duration: 0.1 },
  },
  tap: { scale: 1 },
}

const UserRatingForm = ({
  pokedex,
  formData,
  setFormData,
  setRatingComplete,
}) => {
  const [user, setUser] = useContext(userContext)
  const { allPokemonDb, mutateAllPokemonDb } = useGetAllPokemonDb()

  console.log(user)

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
    if (!formData.comment) {
      alert(
        "Whoa, holdup! You haven't told us how you feel about this pokemon!"
      )
    } else {
      setRatingComplete(true)

      const optimisticNoRank = allPokemonDb.map(poke => {
        if (poke.pokedex === pokedex) {
          const newRatings = [
            ...poke.ratings,
            {
              name: user,
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
        name: user,
        comment: formData.comment,
        rating: formData.rating,
      }

      try {
        await mutateAllPokemonDb(() => optimisticWithRank, false)
        await axios.post('/api/ratings', payload)
      } catch (error) {
        throw new Error(error)
      }
    }
  }

  return (
    <AnimatePresence exitBeforeEnter>
      <div className="flex h-full flex-col justify-center rounded-lg p-20 text-center">
        <div className="flex flex-row items-center justify-center space-x-2">
          <h3 className="text-base">Your Rating:</h3>
          <div className="flex flex-col justify-center align-middle">
            <ReactStars
              size={30}
              value={formData.rating}
              color="gray"
              onChange={e => handleFormChange(e)}
            />
          </div>
        </div>
        <form
          className="align-middle"
          action="/api/ratings"
          method="post"
          onSubmit={e => e.preventDefault()}
        >
          <textarea
            type="text"
            placeholder="Your Comment..."
            className="mt-4 h-[200px] w-full rounded-lg p-4 font-mono text-lg drop-shadow-lg"
            name="comment"
            value={formData.comment}
            required
            onChange={e => handleFormChange(e)}
          />
          <motion.button
            type="submit"
            variants={buttonVariants}
            className="mt-4 w-full rounded-lg bg-[#47a8bd] p-2 text-xl text-white"
            whileHover="hover"
            whileTap="tap"
            onClick={handleFormSubmit}
          >
            Submit
          </motion.button>
        </form>
      </div>
    </AnimatePresence>
  )
}
export default UserRatingForm
