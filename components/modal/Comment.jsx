'use client'

import { motion } from 'framer-motion'
import ReactStars from 'react-rating-stars-component'
import { DateTime } from 'luxon'

const bubbleVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
}

const Comment = ({ rating, comment, name, date }) => {
  return (
    <motion.div
      className="flex max-h-[80%] w-full flex-col items-center justify-between space-y-4 overflow-scroll whitespace-normal rounded-lg bg-white p-4"
      variants={bubbleVariants}
      initial="hidden"
      animate="visible"
    >
      <p>{DateTime.fromISO(date)}</p>
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
      <p className=" w-full break-words text-sm text-[#1e1e1e]">{name}</p>
    </motion.div>
  )
}
export default Comment
