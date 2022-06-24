import { useEffect } from "react"
import styles from './RatingModal.module.css'

const RatingModal = ({ children, isOpen, handleClose }) => {
  useEffect(() => {
    const closeOnEscapeKey = e => e.key === "Escape" ? handleClose() : null;
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    }
  }, [handleClose])

  if (!isOpen) return null

  return (
    <div className={styles.modal}>
      <button onClick={handleClose} className={styles.closeBtn}>
        Close
      </button>
      <div className={styles.modalContent}>
        {children}
      </div>
    </div>
  )
}
export default RatingModal