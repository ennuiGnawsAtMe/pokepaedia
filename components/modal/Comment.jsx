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
  const dateCreated = date
    ? DateTime.fromISO(date).toFormat('DDD')
    : DateTime.now().toFormat('DDD')

  return (
    <motion.div
      className="flex w-full flex-col items-center justify-between space-y-1 overflow-scroll whitespace-normal rounded-lg bg-white p-4"
      variants={bubbleVariants}
      initial="hidden"
      animate="visible"
    >
      <p className="text-xs">{dateCreated}</p>
      <div className="flex">
        <ReactStars
          size={40}
          value={rating}
          edit={false}
          isHalf={true}
          color="gray"
        />
      </div>
      <p className="w-full break-words text-base text-[#1e1e1e]">
        &quot;{comment}&quot;
      </p>
      <p className="w-full break-words pt-2 text-xs text-[#1e1e1e]">{name}</p>
    </motion.div>
  )
}
export default Comment
