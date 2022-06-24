import { useEffect } from "react"
import Image from "next/image"
import ReactPortal from "../utils/ReactPortal"
import styles from './Modal.module.css'
import ReactStars from "react-rating-stars-component"

const Modal = ({ ratingOverall, totalRatings, name, pokedex, blurb, image, isOpen, handleClose}) => {
  useEffect(() => {
    const closeOnEscapeKey = e => e.key === "Escape" ? handleClose() : null;
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    }
  }, [handleClose])

  if (!isOpen) return null

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <div className={styles.modal} >
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
    </ReactPortal>
  )
}
export default Modal