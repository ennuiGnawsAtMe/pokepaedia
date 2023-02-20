import { getRandomPokemon } from '../../utils/helpers'
import data from '../../data/all.json'

const handler = async (req, res) => {
  const randomPokemonArr = getRandomPokemon(data.pokemon)
  return res.status(200).json(randomPokemonArr)
}

export default handler
