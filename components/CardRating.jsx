import axios from 'axios'
import { useSWRConfig } from 'swr'
import Image from 'next/image'
import Link from 'next/link'
import ReactStars from 'react-rating-stars-component'
import styles from '../styles/CardRating.module.css'

const CardRating = ({ pokedex, image, name, ratingOverall, ratings }) => {
  const { mutate } = useSWRConfig()

  const changeHandler = async (newRating) => {
    const payload = {
      pokedex: pokedex,
      userId: 1,
      rating: newRating
    }
    try {
      const res = await axios.post('/api/ratings', payload)
      mutate('/api/pokemon')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
    <div className={styles.nameContainer}>
      <h2>{name}</h2>
    </div>
    <div className={styles.imageContainer} style={{cursor:`pointer`}}>
      <Link href={`/${name.toLowerCase()}`} >
        <a><Image src={image} alt={name} layout="fill" objectFit='contain' /></a>
      </Link>
    </div>
    <div className={styles.ratingContainer}>
      <div className={styles.oneRatingContainer}>
        <span className={styles.ratingText}>{`Your rating:`}</span><ReactStars size={20} value={0} onChange={newValue => changeHandler(newValue)} />
      </div>
      <div className={styles.overallRatingContainer}>
        <span className={styles.ratingText}>{`${ratingOverall} stars, ${ratings.length} ratings`}</span><ReactStars size={20} key={ratingOverall} value={ratingOverall} edit={false} isHalf={true} />
      </div>
    </div>
    </>
  )
  }

export default CardRating