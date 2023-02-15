'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useContext } from 'react'
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

const ThankYou = ({ rating, comment }) => {
  const [user, setUser] = useContext(userContext)

  return (
    <AnimatePresence>
      <motion.div
        className="flex max-h-[75%] w-2/3 flex-col items-center justify-between space-y-4 overflow-scroll whitespace-normal rounded-lg bg-white p-4"
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
  )
}
export default ThankYou
