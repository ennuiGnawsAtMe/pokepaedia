import Select from 'react-select'
import { useContext, useState } from 'react'
import styles from '../styles/DropdownName.module.css'
import allPokemonContext from '../context/allPokemonContext'
import pokemonCardsContext from '../context/pokemonCardsContext'


const DropdownName = () => {
  const [allPokemon, setAllPokemon] = useContext(allPokemonContext)
  const [pokemonCards, setPokemonCards] = useContext(pokemonCardsContext)

    const options = allPokemon.map(poke => {
      return {
      value: poke.pokedex,
      label: poke.name,
    }
  })

    const changeHandler = (selection) => {
        const pokedexList = selection.map(element => element.value)
        const newSelection = []
        for (let i = 0; i < pokedexList.length; i++) {
          newSelection.push(allPokemon.find(({ pokedex }) => pokedex === pokedexList[i]))
        }
        setPokemonCards(newSelection.slice(0).reverse())
    }

    return (
      <div className={styles.container}>
        <Select
              isMulti
              maxMenuHeight={600}
              placeholder={`Search Pokemon by Name`}
              options={options}
              instanceId="name-value-select"
              onChange={event => changeHandler(event)}
              />
      </div>
    )
}

export default DropdownName