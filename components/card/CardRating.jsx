import axios from 'axios'
import { useGetAllPokemonDb } from '../../lib/swr/useGetAllPokemonDb'
import { getOrdinalNumbers } from '../../lib/funcs'
import Image from 'next/image'
import Link from 'next/link'
import ReactStars from 'react-rating-stars-component'
import styles from './CardRating.module.css'

const CardRating = ({ pokedex, image, name, ratingOverall, ratings }) => {
  const { allPokemonDb, mutateAllPokemonDb } = useGetAllPokemonDb()

  const changeHandler = async (newRating) => {
    const optimisticNoRank = allPokemonDb.map(poke => {
      if (poke.pokedex === pokedex) {
        const newRatings = [...poke.ratings, {userId: 1, pokedex: poke.pokedex, rating: newRating}]
        const newOverall = newRatings.reduce((total, current) => total + current.rating, 0) / newRatings.length
        const newOverallRating = Number(newOverall.toFixed(1))
        
        return { 
          ...poke,
          ratings: newRatings,
          ratingOverall: newOverallRating
        }
      }
        return poke
    })

    const sortedRanking = optimisticNoRank.sort((a, b) => b.ratingOverall - a.ratingOverall || b.ratings.length - a.ratings.length || a.pokedex - b.pokedex)
    const optimisticWithRank = sortedRanking.map(poke => ({ ...poke, ranking: getOrdinalNumbers(sortedRanking.indexOf(poke) + 1) }))

    const payload = {
      pokedex: pokedex,
      userId: 1,
      rating: newRating
    }

    try {
      const res =  await axios.post('/api/ratings', payload)
      const newRankings = await mutateAllPokemonDb(optimisticWithRank)
    } catch (error) {
      console.error(error)
    }
  }

  // const findPokes = (array, end) => {
  //   const start = end - 100
  //   return array.slice(start, end)
  // }
      
  // const changeHandler = (rankings) => {
  //   const slicedPokemonDb = findPokes(allPokemonDb, rankings)
  //   const fullPokemonData = slicedPokemonDb.map(poke => {
  //       const jsonPokemon = allPokemon.find(pokemon => pokemon.pokedex === poke.pokedex)
  //       return { ...poke, ...jsonPokemon}
  //   })
  //   setPokemonCards(fullPokemonData)
  // }


  return (
    <>
    <div className={styles.imageContainer} >
       {/* <Link href={`/${name.toLowerCase()}`} >
         <a> */}
          <Image src={image} alt={name} layout="fill" objectFit='contain' />
          {/* </a>
       </Link> */}
      </div>
      <div className={styles.nameContainer}>
        <h2>{name}</h2>
      </div>
        <div className={styles.details}>
        <div className={styles.detailsTop}>
        </div>
        </div> 
    </>
  )
  }

export default CardRating