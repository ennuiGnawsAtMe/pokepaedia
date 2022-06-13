import prisma from '../../lib/prisma'

export default handler = async (req, res) => {
    console.log(req.body)
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