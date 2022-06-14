import prisma from '../../../lib/prisma'

const handler = async (req, res) => {
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
    return res.status(200).json(avgRating)
}

export default handler