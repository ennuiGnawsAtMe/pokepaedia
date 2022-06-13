import prisma from '../../lib/prisma'

const handler = async (req, res) => {
    const { rating, pokedex, userId } = req.body
    
    const newRating = await prisma.rating.create({
        data: {
            rating,
            user: { connect: { id: userId } },
            pokemon: { connect: { pokedex: pokedex } },
        },
    })
    console.log(newRating)
    return res.status(200).json(newRating)
}

export default handler