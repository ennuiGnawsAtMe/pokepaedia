const { PrismaClient } = require('@prisma/client')
const data = require('../data/all.json')
const prisma = new PrismaClient();

const getPokemonSeed = () => {
  const pokemonSeed = data.pokemon.map(poke => (
  { 
    pokedex: poke.pokedex, 
    name: poke.name, 
    image: poke.image,
    blurb: poke.blurb,
  }
))
return pokemonSeed
}

const getTypeSeed = () => {
  const dupes = data.pokemon.map(poke => poke.type).flat()
  return [...new Set(dupes)].map(el => ({ type: el }))
}

const getAbilitySeed = () => {
  const dupes = data.pokemon.map(poke => poke.ability)
  console.log(dupes)
}

 
// seed can be run anytime on npm run seed
const main = async () => {
  try {
    getAbilitySeed()
      // this deletes models before seeding & resets autoincrement ID to 1
      await prisma.$queryRaw`TRUNCATE TABLE "Pokemon" RESTART IDENTITY CASCADE`
      await prisma.$queryRaw`TRUNCATE TABLE "Ability" RESTART IDENTITY CASCADE`
      await prisma.$queryRaw`TRUNCATE TABLE "Type" RESTART IDENTITY CASCADE`


      // this seeds the models
      await prisma.type.createMany({
        data: typeSeed
      })

      await prisma.pokemon.createMany({
        data: pokemonSeed        
      })

  } catch (e) {
      console.error(e)
      process.exit(1)
  } finally {
      await prisma.$disconnect()
  }
}

main()


