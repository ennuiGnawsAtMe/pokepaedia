import React, { useState, useContext } from 'react'
import { pokemonContext } from '../pages/_app'
import Card from './Card'
import styles from '../styles/SearchList.module.css'

const SearchList = () => {
  const {pokemon, setPokemon} = useContext(pokemonContext)

  return (
    <div className={styles.container}>
        {pokemon.slice(0).reverse().map(poke => (<Card key={poke.id} pokemon={poke} />))}
    </div>
  )
  }

export default SearchList