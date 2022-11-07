import Image from "next/legacy/image";
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Modal.module.css'
import OverallRatings from './OverallRatings'
import UserRatingForm from "./UserRatingForm"
import ThankYou from "./ThankYou"

const backdropVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
}

const Modal = ({ showModal, setShowModal, ratingOverall, ratings, name, pokedex, blurb, image, ranking }) => {
  const [ratingComplete, setRatingComplete] = useState(false)
  const [formData, setFormData] = useState({ rating: 0, userName: '', comment: '' })

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

  return (
    <AnimatePresence exitBeforeEnter>
      {showModal &&  (
        <motion.div 
          className={styles.backdrop}
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={handleParentClick}
        >   
          <div className={styles.modal} onClick={handleChildClick} >
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
                <OverallRatings name={name} ratings={ratings} ratingOverall={ratingOverall} ranking={ranking} blurb={blurb} />
                {!ratingComplete 
                  ? <UserRatingForm name={name} pokedex={pokedex} formData={formData} setFormData={setFormData} setRatingComplete={setRatingComplete}/> 
                  : <ThankYou name={name} {...formData} />
                }
            </div>
          </div>
        </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
export default Modal