import data from '../../data/all.json'
import { pokemonImages } from '../../data/imgDictionary'

const handler = async (req, res) => {
  const pokemon = data.pokemon

  const checkMissing = allPokes => {
    let missing = []

    allPokes.forEach(poke => {
      poke.imageLocal == null && missing.push(poke.name)
    })

    return missing
  }

  const missing = checkMissing(pokemon)

  const updated = pokemon.map(poke => ({
    ...poke,
    imageLocal: pokemonImages[poke.name.toLowerCase()],
  }))

  const updatedMissing = checkMissing(updated)

  return res.status(200).json(updated)
}

export default handler
