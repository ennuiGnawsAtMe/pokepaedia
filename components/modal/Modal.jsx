'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import OverallRatings from './OverallRatings'
import UserRatingForm from './UserRatingForm'
import ThankYou from './ThankYou'
import { XMarkIcon } from '@heroicons/react/24/solid'

const backdropVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
}

const Modal = ({
  ratingOverall,
  ratings,
  ranking,
  name,
  pokedex,
  blurb,
  imageLocal,
  setShowModal,
}) => {
  const [ratingComplete, setRatingComplete] = useState(false)
  const [formData, setFormData] = useState({
    rating: 0,
    userName: '',
    comment: '',
  })

  const handleParentClick = event => {
    event.preventDefault()
    if (event.target === event.currentTarget) {
      setShowModal(false)
    }
  }

  return (
    <AnimatePresence>
      <motion.div
        className="fixed top-0 left-0 z-30 flex h-screen w-full flex-col items-center justify-center bg-black bg-opacity-80"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={handleParentClick}
      >
        <div className="flex h-4/5 max-h-[750px] min-h-[650px] w-4/5 max-w-[1280px] flex-row justify-center rounded-md bg-white text-center align-middle">
          <div className="flex h-full w-1/2 flex-col items-center justify-start p-10">
            <Image
              src={imageLocal}
              alt={name}
              placeholder={imageLocal ? 'blur' : 'empty'}
              sizes="100vw"
              style={{
                objectFit: 'contain',
              }}
              className="h-1/2"
            />
            <OverallRatings
              name={name}
              ratings={ratings}
              ratingOverall={ratingOverall}
              ranking={ranking}
              blurb={blurb}
            />
          </div>
          <div className="flex w-1/2 flex-col justify-center rounded-md text-center">
            {!ratingComplete ? (
              <UserRatingForm
                name={name}
                pokedex={pokedex}
                formData={formData}
                setFormData={setFormData}
                setRatingComplete={setRatingComplete}
              />
            ) : (
              <ThankYou name={name} {...formData} />
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
export default Modal
