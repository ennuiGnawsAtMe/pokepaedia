import styles from '../styles/DetailAbout.module.css'

const DetailStats = ({ pokemon }) => {

  return (
    <div className={styles.container}>
      <p>{pokemon.name} stats</p>
    </div>
        )}

export default DetailStats