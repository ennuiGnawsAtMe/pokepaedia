import axios from 'axios'
import { useSWRConfig } from 'swr'
import ReactStars from 'react-rating-stars-component'
import styles from '../styles/CardRating.module.css'

const CardRating = ({ pokedex }) => {
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
    <div className={styles.container}>
     <ReactStars size={40} value={0} onChange={newValue => changeHandler(newValue)} />
    </div>
  )
  }

export default CardRating