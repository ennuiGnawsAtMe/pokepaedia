import { getRandomPokemon } from '../../utils/helpers'
import data from '../../data/all.json'

const handler = async (req, res) => {
  const randomPokemon = getRandomPokemon(data.pokemon)
  res.status(200).json(randomPokemon)
}

export default handler
