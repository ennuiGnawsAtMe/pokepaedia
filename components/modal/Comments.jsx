'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useContext } from 'react'
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/solid'
import userContext from '../../context/userContext'
import ReactStars from 'react-rating-stars-component'

const bubbleVariants = {
  hidden: {
    translateY: 200,
    opacity: 0,
  },
  visible: {
    translateY: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
}

const Comments = ({ rating, comment }) => {
  const [user, setUser] = useContext(userContext)

  return (
    <div className="flex h-full w-full flex-row items-center justify-between space-x-4 px-10">
      <ChevronLeftIcon className="w-10 rounded-full bg-white p-2 drop-shadow-lg" />
      <AnimatePresence>
        <motion.div
          className="flex max-h-[80%] w-full flex-col items-center justify-between space-y-4 overflow-scroll whitespace-normal rounded-lg bg-white p-4"
          variants={bubbleVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex">
            <ReactStars
              size={40}
              value={rating}
              edit={false}
              isHalf={true}
              color="gray"
            />
          </div>
          <p className="w-full break-words text-xl text-[#1e1e1e]">{comment}</p>
          <p className=" w-full break-words text-sm text-[#1e1e1e]">
            {user || 'Anonymous'}
          </p>
        </motion.div>
      </AnimatePresence>
      <ChevronRightIcon className="w-10 rounded-full bg-white p-2 drop-shadow-lg" />
    </div>
  )
}
export default Comments
