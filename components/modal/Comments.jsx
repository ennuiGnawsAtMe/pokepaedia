'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useContext } from 'react'
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/solid'
import userContext from '../../context/userContext'
import ReactStars from 'react-rating-stars-component'
import Comment from './Comment'

const Comments = ({ rating, comment, ratings }) => {
  const [user, setUser] = useContext(userContext)
  const [ratingIndex, setRatingIndex] = useState(0)

  ratings.push({ comment, rating, name: user })
  const allRatings = ratings.reverse()

  const clickHandlerRight = () => {
    setRatingIndex(ratingIndex === ratings.length - 1 ? 0 : ratingIndex + 1)
    console.log(allRatings, ratingIndex)
  }

  return (
    <div className="flex h-full w-full flex-row items-center justify-between space-x-4 px-10">
      <ChevronLeftIcon className="w-10 rounded-full bg-white p-2 drop-shadow-xl hover:scale-105 active:scale-95" />
      <AnimatePresence>
        <Comment
          comment={allRatings[ratingIndex].comment}
          name={allRatings[ratingIndex].name}
          rating={allRatings[ratingIndex].rating}
        />
      </AnimatePresence>
      <ChevronRightIcon
        className="w-10 rounded-full bg-white p-2 drop-shadow-xl hover:scale-105 active:scale-95"
        onClick={clickHandlerRight}
      />
    </div>
  )
}
export default Comments
