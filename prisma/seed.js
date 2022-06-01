const { PrismaClient } = require('@prisma/client')
const data = require('../data/all.json')
const prisma = new PrismaClient();
const { getPokemonSeed, getTypeSeed, getAbilitySeed, TYPEID, ABILITYID } = require('./utils')

// Seed can be run anytime with `npm run seed`//
const main = async () => {
  try {
    // this builds the seeds from `data/all.json`
    const pokemonSeed = getPokemonSeed(data)
    const typeSeed = getTypeSeed(data)
    const abilitySeed = getAbilitySeed(data)

      // this deletes contents of models before seeding & resets autoincrement ID to 1
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

      await prisma.ability.createMany({
        data: abilitySeed        
      })

      //this add the many-many relations between pokemon and type/ability
      for (let i = 0; i < data.pokemon.length; i++) {

        const types = data.pokemon[i].type.map(poke => ({ id: TYPEID[poke.type]}))
        const abilities = data.pokemon[i].ability.map(poke => ({ id: ABILITYID[poke.ability]}))

        await prisma.pokemon.update({
        where: { pokedex: data.pokemon[i].pokedex },
        data: {
          type: {
            connect: types,
          },
          ability: {
            connect: abilities,
          },
        },
      })
      }
  } catch (e) {
      console.error(e)
      process.exit(1)
  } finally {
      await prisma.$disconnect()
  }
}

main()