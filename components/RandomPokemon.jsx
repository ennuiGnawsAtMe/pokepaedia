import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/RandomPokemon.module.css'

const RandomPokemon = (props) => {
  return (
    <>
      <div className={styles.container} onClick={props.clickHandler} style={{cursor:"pointer"}}>
            <div className={styles.imageContainer}>
                <Image 
                    src={props.image}
                    alt={props.name}
                    layout="fill" 
                    objectFit='contain'
                    priority
                />
            </div>
          <div className={styles.details}>
            <h1>{props.name}</h1>
            <p>{props.blurb}</p>
            <button style={{cursor:"pointer"}}>&gt;&gt;&gt; Next</button>
          </div>
       </div>
    </>
  )
}

export default RandomPokemon