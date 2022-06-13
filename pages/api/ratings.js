import prisma from '../../lib/prisma'

const handler = async (req, res) => {
    const { rating, pokedex, userId } = req.body
    
    const newRating = await prisma.rating.create({
        data: {
            rating: rating,
            user: { connect: { id: userId } },
            pokemon: { connect: { pokedex: pokedex } },
        },
    })

    const allRatings = await prisma.rating.findMany({
        where: {
            pokedex: pokedex
        },
        select: {
            rating: true
        }
    })
    
    const avg = allRatings.reduce((acc, curr) => acc + curr.rating, 0) / allRatings.length
    const average = Number(avg.toFixed(1))
    
    const updatePokemonRating = await prisma.pokemon.update({
        where: {
            pokedex: pokedex,
        },
        data: {
            ratingOverall: average,
        },
    })

    return res.status(200).json("working!")
}

export default handler