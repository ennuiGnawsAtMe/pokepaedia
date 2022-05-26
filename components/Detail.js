import { useEffect } from 'react'
import Image from 'next/image'
import { fetchOnePokemonByName } from '../lib/controllers'

const Detail = () => {

  useEffect(() => {
    dispatch(fetchOnePokemonByName(id))
  }, [])

  return (
    <div className='detail-container'>
          <div className="details">
            <button>go back</button>
        <div className='details-left-title'>
          <h1>{pokemon.name}</h1>
          <p>{pokemon.blurb}</p>
        </div>
        <div className="details-left-stats">
          <p>{pokemon.habitat}</p>
          <p>{pokemon.colour}</p>
          <p>{pokemon.shape}</p>
          <p>{pokemon.attack}</p>
          <p>{pokemon.defense}</p>
        </div>
        </div>
        <div className='details-image'>
          <Image 
            src={pokemon.image} 
            alt={props.name}
            layout="fill" 
            objectFit='contain'
            />
        </div>
    </div>
        )}

export default Detail