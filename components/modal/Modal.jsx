import Image from "next/image"
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Modal.module.css'
import ReactStars from "react-rating-stars-component"

const backdropVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
  }  
  
const buttonVariants = {
  hover: { 
    backgroundColor: "#FFA500",
    transition: { duration: 0.1 }
  },
  tap: { scale: 1 }
}

const initialData = {
  rating: 0,
  name: '',
  comment: ''
 }

const Modal = ({ showModal, setShowModal, ratingOverall, ratings, name, pokedex, blurb, image, ranking }) => {
  const [formData, setFormData] = useState(initialData)

  const parentClickHandler = event => {
    event.preventDefault()

    if (event.target === event.currentTarget) {
      setShowModal(false)
    }
  }

  const childClickHandler = event => {
    event.stopPropagation()
    // logic goes here
  }

  const changeHandler = (e) => {
    if (typeof e === 'number') {
      setFormData({
        ...formData,
        rating: e
      })
    } else {
    const { name, value } = e.target
    setFormData({
      ...formData, 
      [name]: value 
    })
  }
  }

  //TODO complete post request of the form data to database
  const formSubmitHandler = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <AnimatePresence exitBeforeEnter>
      {showModal &&  (
        <motion.div className={styles.backdrop}
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={parentClickHandler}
        >   
          <motion.div className={styles.modal} onClick={childClickHandler} >
          <div className={styles.modalContent}>
            <div className={styles.imageWrapper}>
              <Image src={image} alt={name} layout="fill" objectFit='contain' />
            </div>
            <div className={styles.detailsContainer}>
              <div className={styles.pokemonDetails}>
                <div className={styles.nameContainer}>
                  <div className={styles.nameWrapper}>
                    <h1>{name}</h1>
                  </div>
                  <div className={styles.rankingContainer}>
                    <p>Ranked</p>
                    <h2>{ranking}</h2>
                  </div>
                </div>
                <div className={styles.overallStars}>
                <ReactStars 
                  size={20} 
                  value={ratingOverall} 
                  edit={false} 
                  isHalf={true} 
                />
                </div>
                <h4>{ratingOverall} stars from {ratings.length} ratings</h4>
                <div className={styles.blurbWrapper}>
                  <p>{blurb}</p>
                </div>
              </div>
              
              <div className={styles.userRatingContainer}>
                {!formData.rating ? <h3>Your Rating</h3> : <h3>You gave {name} {formData.rating} {formData.rating === 1 ? "star!" : "stars!"} </h3>}
                <div className={styles.starsWrapper}>
                  <ReactStars 
                    size={40} 
                    value={0} 
                    onChange={e => changeHandler(e)} 
                  />
                </div>
              <form className={styles.formWrapper} action="/api/ratings" method="post">
                <input 
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={formData.name}
                  required
                  onChange={(e => changeHandler(e))}
                  />
                <textarea 
                  type="text" 
                  placeholder="Comment"
                  name="comment"
                  value={formData.comment}
                  required
                  onChange={(e => changeHandler(e))}
                   />
                <motion.button
                   type="submit"
                   variants={buttonVariants}
                   whileHover="hover"
                   whileTap="tap"
                   onClick={formSubmitHandler}
                   >Submit
                </motion.button>
              </form>
            </div> 
            </div>
          </div>
        </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
export default Modal