import styles from '../styles/DetailAbout.module.css'

const DetailAbout = ({ pokemon }) => {

  return (
    <div className={styles.container}>
      <h3>{pokemon.blurb}</h3>
      <div className={styles.detailsContainer}>
        <div className={styles.detailsLeft}>
          <p>placeholder</p>
        </div>
        <div className={styles.detailsRight}>
          <p>placeholder</p>
        </div>
      </div>
    </div>
        )}

export default DetailAbout