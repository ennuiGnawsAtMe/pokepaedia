import { useState } from 'react'
import CardBack from './CardBack'
import CardFront from './CardFront'
import styles from '../styles/Card.module.css'

const Card = ({ pokemon }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleClick = () => {
  setIsFlipped(!isFlipped)
  }

  const cardColour = {
    'red': '#AB1E23',
    'blue': '#1452E2',
    'yellow': '#E3E32A',
    'green': '#147B3E',
    'black':'#BBBBBB',
    'brown': '#994022',
    'purple': '#5E2E87',
    'gray': '#D1D1E0',
    'white': '#fefefe',
    'pink': '#A72B6E'
        }

  return (
    <div className={styles.container}>
        {!isFlipped
          ? <CardFront pokemon={pokemon} flip={handleClick} colour={cardColour[pokemon.colour]} />
          : <CardBack pokemon={pokemon} flip={handleClick} colour={cardColour[pokemon.colour]} />
          }
    </div>
  )
  }

export default Card
  