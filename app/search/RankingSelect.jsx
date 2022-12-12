// 'use client'

// import { useContext } from 'react'
// import Select from 'react-select'
// import pokemonCardsContext from '../../context/pokemonCardsContext.js'
// import { goToTop } from '../../utils/helpers.js'
// import { useGetAllPokemonDb } from '../../utils/swr'
// import { RankOptions } from '../../utils/constants'

// const RankingSelect = ({ allPokemon }) => {
//   const [pokemonCards, setPokemonCards] = useContext(pokemonCardsContext)
//   const { allPokemonDb } = useGetAllPokemonDb()

//   const findPokes = (array, end) => {
//     const start = end - 100
//     return array.slice(start, end)
//   }

//   const changeHandler = rankings => {
//     goToTop()
//     const slicedPokemonDb = findPokes(allPokemonDb, rankings)
//     const fullPokemonData = slicedPokemonDb.map(poke => {
//       const jsonPokemon = allPokemon.find(
//         pokemon => pokemon.pokedex === poke.pokedex
//       )
//       return { ...poke, ...jsonPokemon }
//     })
//     setPokemonCards(fullPokemonData)
//   }

//   return (
//     <>
//       <Select
//         placeholder={`Search Pokémon by Ranking...`}
//         maxMenuHeight={400}
//         options={RankOptions}
//         instanceId="rank-value-select"
//         onChange={event => changeHandler(event.value)}
//         blurInputOnClear={true}
//         focusInputOnMenuOpen={false}
//       />
//     </>
//   )
// }

// export default RankingSelect
