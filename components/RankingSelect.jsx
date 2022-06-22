import { useContext } from 'react'
import Select from 'react-select'
import pokemonCardsContext from '../context/pokemonCardsContext.js'
import { useGetAllPokemonDb } from '../lib/swr/useGetAllPokemonDb.js'
import { RankOptions } from '../lib/vars'

const RankingSelect = ({ allPokemon }) => {
  const [pokemonCards, setPokemonCards] = useContext(pokemonCardsContext)
  const { allPokemonDb } = useGetAllPokemonDb()

  const findPokes = (array, end) => {
    const start = end - 100
    return array.slice(start, end)
  }
      
  const changeHandler = (rankings) => {
    const slicedPokemonDb = findPokes(allPokemonDb, rankings)
    const fullPokemonData = slicedPokemonDb.map(poke => {
        const jsonPokemon = allPokemon.find(pokemon => pokemon.pokedex === poke.pokedex)
        return { ...poke, ...jsonPokemon}
    })
    // const newSelection = allPokemon.filter(({ shape }) => shape == shapeName)
    setPokemonCards(fullPokemonData)
  }

return (
  <>
    <Select
          placeholder={`Search Pokemon by Rank`}
          maxMenuHeight={400}
          options={RankOptions}
          instanceId="rank-value-select"
          onChange={event => changeHandler(event.value)}
        />
  </>
)
}

export default RankingSelect