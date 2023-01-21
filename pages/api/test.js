import {
  getShapeOptions,
  getNameOptions,
  getColourOptions,
  getHabitatOptions,
  getAbilityOptions,
} from '../../utils/helpers'
import data from '../../data/all.json'

const handler = async (req, res) => {
  const options = getAbilityOptions(data.pokemon)
  return res.status(200).json(options)
}

export default handler
