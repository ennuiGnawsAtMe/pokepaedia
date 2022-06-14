import prisma from "../../lib/prisma"

const handler = async (req, res) => {

    const pokemon = await prisma.pokemon.findUnique({
        where: {
            pokedex: 1
        }
    })

    return res.status(200).json(pokemon)
}

export default handler