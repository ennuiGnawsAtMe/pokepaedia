'use client'

import Image from 'next/image'
import { useState, useContext } from 'react'
import { motion } from 'framer-motion'
import OverallRatings from './OverallRatings'
import UserRatingForm from './UserRatingForm'
import ThankYou from './ThankYou'
import { XMarkIcon } from '@heroicons/react/24/solid'

const backdropVariants = {
  visible: { opacity: 1, transition: { duration: 0.3 } },
  hidden: { opacity: 0, transition: { duration: 0.3 } },
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
    comment: '',
  })

  const handleParentClick = event => {
    event.preventDefault()
    if (event.target === event.currentTarget) {
      setShowModal(false)
    }
  }

  return (
    <motion.div
      className="fixed top-0 left-0 z-30 flex h-screen w-screen flex-col items-center justify-center bg-black bg-opacity-80"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={handleParentClick}
    >
      <div className=" fixed flex h-4/5 max-h-[750px] min-h-[650px] w-4/5 max-w-[1280px] flex-col justify-center rounded-md bg-white text-center align-middle">
        <button
          className="absolute top-4 right-4 flex flex-row items-center justify-center"
          onClick={() => {
            setShowModal(false)
          }}
        >
          <XMarkIcon className=" w-6" />
        </button>
        <div className="flex h-full flex-row">
          <div className="flex h-full w-1/2 flex-col items-center justify-start p-6">
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
              blurb={blurb}
              pokedex={pokedex}
              ranking={ranking}
              ratingOverall={ratingOverall}
              ratings={ratings}
            />
          </div>
          <div className="flex w-1/2 flex-col items-center justify-center rounded-md bg-[#47a7bd18] text-center">
            {!ratingComplete ? (
              <UserRatingForm
                name={name}
                pokedex={pokedex}
                formData={formData}
                setFormData={setFormData}
                setRatingComplete={setRatingComplete}
              />
            ) : (
              <ThankYou {...formData} />
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
export default Modal
