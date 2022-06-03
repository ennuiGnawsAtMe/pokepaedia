import styles from '../styles/DetailAbout.module.css'

const DetailComments = ({ pokemon }) => {

  return (
    <div className={styles.container}>
      <p>{pokemon.name} comments</p>
    </div>
        )}

export default DetailComments