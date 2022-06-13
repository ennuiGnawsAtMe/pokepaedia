import { useEffect, useState } from 'react'
import CardStats from './CardStats'
import CardBlurb from './CardBlurb'
import CardTypes from './CardTypes'
import styles from '../styles/Card.module.css'

  const CARD_COLOURS = {
  'red': {backgroundColor: '#AB1E23', color: 'white'},
  'blue': {backgroundColor:'#1452E2', color: 'white'},
  'yellow': {backgroundColor:'#E3E32A', color: 'black'},
  'green': {backgroundColor:'#147B3E', color: 'white'},
  'black':{backgroundColor:'#BBBBBB', color: 'black'},
  'brown': {backgroundColor:'#994022', color: 'white'},
  'purple': {backgroundColor:'#5E2E87', color: 'white'},
  'gray': {backgroundColor:'#D1D1E0', color: 'black'},
  'white': {backgroundColor:'#fefefe', color: 'black'},
  'pink': {backgroundColor:'#A72B6E', color: 'white'}
  }

const Card = ({ pokemon }) => {
  const [isFlipped, setIsFlipped] = useState('blurb')

  const clickHandler = () => {
    if (isFlipped == 'blurb') {
      setIsFlipped('types')
    } else if (isFlipped == 'types') {
      setIsFlipped('stats')
    } else if (isFlipped =='stats') {
      setIsFlipped('blurb')
    }
  }

  const getComponent = ({
      blurb: <CardBlurb pokemon={pokemon} flip={clickHandler} colour={CARD_COLOURS[pokemon.colour]} />,
      types: <CardTypes pokemon={pokemon} flip={clickHandler} colour={CARD_COLOURS[pokemon.colour]} />,
      stats: <CardStats pokemon={pokemon} flip={clickHandler} colour={CARD_COLOURS[pokemon.colour]} />
  })

  return (
    <div className={styles.container}>
      {getComponent[isFlipped]}
    </div>
  )
  }

export default Card
  