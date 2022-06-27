import { useEffect, useRef } from "react"
import { CSSTransition } from "react-transition-group"
import Image from "next/image"
import ReactPortal from "../utils/ReactPortal"
import styles from './Modal.module.css'
import ReactStars from "react-rating-stars-component"

const Modal = ({ ratingOverall, totalRatings, name, pokedex, blurb, image, isOpen, handleClose}) => {
  const nodeRef = useRef(null)

  useEffect(() => {
    const closeOnEscapeKey = e => e.key === "Escape" ? handleClose() : null
    document.body.addEventListener("keydown", closeOnEscapeKey)
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey)
    }
  }, [handleClose])

  // if (!isOpen) return null

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <CSSTransition
        in={isOpen}
        timeout={{ entry: 0, exit: 300 }}
        unmountOnExit
        classNames={{
          enterDone: styles.modalEnterDone,
          exit: styles.modalExit
        }}
        nodeRef={nodeRef}
      >
      <div className={styles.modal} ref={nodeRef}>
        <button onClick={() => handleClose()} className={styles.closeBtn}>
                Close
              </button>
        <div className={styles.modalContent}>
            <div className={styles.imageContainer}>
              <Image src={image} alt={name} layout="fill" objectFit='contain' />
            </div>
          <div className={styles.detailsWrapper}>
              <h1>{name}</h1>
              <ReactStars size={20} value={ratingOverall} edit={false} isHalf={true} />
              <h4>{ratingOverall} stars from {totalRatings} ratings</h4>
              <p>{blurb}</p>
              <ReactStars size={50} value={0} onChange={newValue => changeHandler(newValue)} />
            <form action="/api/ratings" method="post">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" />
              <label htmlFor="comment">Comment:</label>
              <input type="text" id="comment" name="comment" />
              <button type="submit">Submit</button>
            </form>
          </div> 
        </div>
      </div>
      </CSSTransition>
    </ReactPortal>
  )
}
export default Modal