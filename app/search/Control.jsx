'use client'

import { useContext } from 'react'
import cardFacesContext from '../../context/cardFacesContext'
import pokemonCardsContext from '../../context/pokemonCardsContext'
import {
  XMarkIcon,
  ArrowUturnLeftIcon,
  ArrowPathIcon,
} from '@heroicons/react/24/solid'

const Control = () => {
  const [pokemonCards, setPokemonCards] = useContext(pokemonCardsContext)
  const [cardFaces, setCardFaces] = useContext(cardFacesContext)

  const flip = () => {
    switch (cardFaces) {
      case 'image':
        setCardFaces('about')
        break
      case 'about':
        setCardFaces('types')
        break
      case 'types':
        setCardFaces('ability')
        break
      case 'ability':
        setCardFaces('image')
        break
    }
  }

  const clear = () => {
    setPokemonCards([])
    setCardFaces('image')
  }

  const shuffle = () => {
    const newSelection = [...pokemonCards]
    const shuffled = newSelection.sort(() => Math.random() - 0.5)
    setPokemonCards(shuffled)
  }

  return (
    <div
      className={`${
        pokemonCards.length ? 'flex' : 'hidden'
      } w-full cursor-pointer flex-row justify-start space-x-8 pl-6 text-sm text-white`}
    >
      <span
        className="flex flex-row hover:text-lime-400 active:text-white"
        onClick={() => flip(cardFaces)}
      >
        <ArrowUturnLeftIcon className="mr-1 w-4" />
        <button>FLIP</button>
      </span>
      <span
        onClick={() => shuffle()}
        className="flex flex-row hover:text-lime-400 active:text-white"
      >
        <ArrowPathIcon className="mr-1 w-4" />
        <button>SHUFFLE</button>
      </span>
      <span
        className="flex flex-row hover:text-lime-400 active:text-white"
        onClick={() => clear()}
      >
        <XMarkIcon className="mr-1 w-4" />
        <button>CLEAR</button>
      </span>
    </div>
  )
}

export default Control
