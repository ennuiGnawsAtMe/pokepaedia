import axios from 'axios'
import { useSWRConfig } from 'swr'
import ReactStars from 'react-rating-stars-component'
import styles from '../styles/CardBlurb.module.css'

const CardAbout = ({ blurb, pokedex, ratingOverall }) => {
  // const { pokemonDb, isLoading, isError } = useAllPokemon()
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
      <ReactStars key={ratingOverall} size={20} value={ratingOverall} edit={false} isHalf={true} />
      <div className={styles.details}>
        <div className={styles.detailsTop}>
          <p>{blurb}</p> 
        </div>
      </div> 
    </>
  )
  }

export default CardAbout