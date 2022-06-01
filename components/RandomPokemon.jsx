import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios'
import styles from '../styles/RandomPokemon.module.css'

const RandomPokemon = (props) => {

  const clickHandler = async () => {
    const res = await axios
        .get(`/api/getRandomPokemon`)
        props.setState(res.data)
  }

  return (
    <>
      <div className={styles.container} onClick={clickHandler} style={{cursor:"pointer"}}>
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