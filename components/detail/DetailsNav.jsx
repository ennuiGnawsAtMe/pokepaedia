import styles from './DetailsNav.module.css'

const DetailsNav = ({ component, setComponent }) => {

    const clickHandler = (str) => {
        setComponent(str)
    }

  return (
    <div className={styles.container}>
      <button onClick={() => clickHandler('about')}>ABOUT</button>
      <button onClick={() => clickHandler('stats')}>STATS</button>
      <button onClick={() => clickHandler('evolution')}>EVOLUTION</button>
      <button onClick={() => clickHandler('ranking')}>RANKING</button>
      <button onClick={() => clickHandler('comments')}>COMMENTS</button>
    </div>
        )}

export default DetailsNav