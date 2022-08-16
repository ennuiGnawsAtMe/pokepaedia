import { useContext } from 'react'
import Select from 'react-select'
import pokemonCardsContext from '../../context/pokemonCardsContext.js'
import { goToTop } from '../../lib/funcs.js'
import { useGetAllPokemonDb } from '../../lib/swr.js'


const TypeSelect = ({ allPokemon, options }) => {
  const [pokemonCards, setPokemonCards] = useContext(pokemonCardsContext)
  const { allPokemonDb } = useGetAllPokemonDb()

  const sortByRating = (selectionArr) => {
    const sortedByRating = selectionArr.map(poke => {
      const matchingPoke = allPokemonDb.find(pokemon => pokemon.pokedex == poke.pokedex)
      return ({ ...poke, ratingOverall: matchingPoke.ratingOverall})
    })
    const sorted = sortedByRating.sort((a, b) => b.ratingOverall - a.ratingOverall)
    return sorted
  }
    

  const changeHandler = (typeName) => {
    goToTop()
    const newSelection = []
      allPokemon.forEach(poke => {
        poke.type.forEach(element => element.type == typeName && newSelection.push(poke))
      })
    const sortedSelection = sortByRating(newSelection)
    setPokemonCards(sortedSelection)
  }

return (
  <>
    <Select
          placeholder={`Search Pokemon by Type`}
          maxMenuHeight={400}
          options={options}
          instanceId="type-value-select"
          onChange={event => changeHandler(event.value)}
          blurInputOnClear={true}
          focusInputOnMenuOpen={false}
    />
  </>
)
}

export default TypeSelect