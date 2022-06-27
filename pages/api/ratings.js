import prisma from '../../lib/prisma'

const ratingsApiHandler = async (req, res) => {
    // const { rating, pokedex, userId } = req.body

    console.log(req.body)
    
    // const newRating = await prisma.rating.create({
    //     data: {
    //         rating: rating,
    //         user: { connect: { id: userId } },
    //         pokemon: { connect: { pokedex: pokedex } },
    //     },
    // })

    // const allRatings = await prisma.rating.findMany({
    //     where: {
    //         pokedex: pokedex
    //     },
    //     select: {
    //         rating: true
    //     }
    // })
    
    // const avg = allRatings.reduce((total, current) => total + current.rating, 0) / allRatings.length
    // const average = Number(avg.toFixed(1))
    
    // const updatePokemon = await prisma.pokemon.update({
    //     where: {
    //         pokedex: pokedex,
    //     },
    //     data: {
    //         ratingOverall: average,
    //     },
    //     select: {
    //         pokedex: true,
    //         name: true,
    //         ratingOverall: true,
    //         ratings: true,
    //         comments: true,
    //     }
    // })

    // console.log(`You gave ${updatePokemon.name} ${rating} stars! ${updatePokemon.name}'s average rating is now ${updatePokemon.ratingOverall} from ${allRatings.length} ratings!`)
    // return res.status(200).json(updatePokemon)
}

export default ratingsApiHandler