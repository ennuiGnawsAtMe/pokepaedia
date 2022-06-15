import styles from '../styles/CardStats.module.css'

const CardStats = ({ happiness, ability, shape, habitat }) => {

  return (
        <div className={styles.details}>
        <div className={styles.detailsTop}>
          <span>
            <h4>Happiness</h4><h3>{happiness}</h3>
            <h4>Special Abilities</h4>
            {ability.map(ability => <h3 key={ability.url}>{ability.ability}</h3>)}
          </span>
          <span><h4>Shape</h4><h3>{shape}</h3>
            <h4>Habitat</h4><h3>{habitat}</h3>
          </span>
        </div>
        </div> 
  )
  }

export default CardStats