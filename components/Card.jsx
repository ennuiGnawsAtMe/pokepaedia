import { useState, useEffect } from 'react'
import CardBack from './CardBack'
import CardFront from './CardFront'
import styles from '../styles/Card.module.css'

const Card = (props) => {
  const [isFlipped, setIsFlipped] = useState(false)
  const [cardBorder, setCardBorder] = useState('#47A8BD')

  const handleClick = () => {
  setIsFlipped(!isFlipped)
  }

  const cardColourFunc = () => {
    switch (props.pokemon.colour) {
          case 'red':
            setCardBorder('#AB1E23')
            break
          case 'blue':
            setCardBorder('#1452E2')
            break
          case 'yellow':
            setCardBorder('#E3E32A')
            break
          case 'green':
            setCardBorder('#147B3E')
            break
          case 'black':
            setCardBorder('#BBBBBB')
            break
          case 'brown':
            setCardBorder('#994022')
            break
          case 'purple':
            setCardBorder('#5E2E87')
            break
          case 'gray':
            setCardBorder('#D1D1E0')
            break
          case 'white':
            setCardBorder('#fefefe')
            break
          case 'pink':
            setCardBorder('#A72B6E')
           break
          default:
            return
        }
      }

  useEffect(() => {
    cardColourFunc()
  }, [])

  return (
    <div className={styles.container}>
        {!isFlipped
          ? <CardFront pokemon={props.pokemon} flip={handleClick} colour={cardBorder} />
          : <CardBack pokemon={props.pokemon} flip={handleClick} colour={cardBorder} />
          }
    </div>
  )
  }

export default Card
  