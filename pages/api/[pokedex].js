import prisma from '../../lib/prisma'

const handler = async (req, res) => {
  try {
    const { pokedex } = req.query
    const avgRating = await prisma.pokemon.findUnique({
      where: {
        pokedex: Number(pokedex)
      },
      select: {
        pokedex: true,
        name: true,
        ratingOverall: true,
        ratings: true,
        comments: true,
      }
    })
    console.log(`One Pokemon has been refetched by SWR!`)
    return res.status(200).json(avgRating)
  } catch (error) {
    console.error(error)
  }
}

export default handler