import Image from "next/image"
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Modal.module.css'
import ReactStars from "react-rating-stars-component"

const backdropVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
  }  
  
const buttonVariants = {
  hover: { backgroundColor: "orange" },
  tap: { scale: 1 }
}

const Modal = ({ showModal, setShowModal, ratingOverall, ratings, name, pokedex, blurb, image, ranking }) => {

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
          {/* <button onClick={() => handleClose()} className={styles.closeBtn}>
            Close
          </button> */}
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
                <h3>Your Rating</h3>
                <ReactStars 
                  className={styles.starsWrapper} 
                  size={50} 
                  value={0} 
                  onChange={newValue => changeHandler(newValue)} 
                />
              <form className={styles.formWrapper} action="/api/ratings" method="post">
                <input 
                  placeholder="Name"
                  type="text" 
                  id="name" 
                  name="name"
                  required
                  maxLength="30" 
                  />
                <textarea 
                  placeholder="Comment"
                  type="text" 
                  id="comment" 
                  name="comment"
                  required
                  minLength="5"
                   />
                <motion.button
                   type="submit"
                   variants={buttonVariants}
                   whileHover="hover"
                   whileTap="tap"
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