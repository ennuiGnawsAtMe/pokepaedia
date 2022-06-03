import styles from '../styles/DetailAbout.module.css'

const DetailRanking = ({ pokemon }) => {

  return (
    <div className={styles.container}>
      <p>{pokemon.name} ranking</p>
    </div>
        )}

export default DetailRanking