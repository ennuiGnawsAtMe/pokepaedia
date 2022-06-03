import styles from '../styles/DetailAbout.module.css'

const DetailEvolution = ({ pokemon }) => {

  return (
    <div className={styles.container}>
      <p>{pokemon.name} evolution</p>
    </div>
        )}

export default DetailEvolution