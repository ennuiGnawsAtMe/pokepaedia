const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const data = require('../data/all.json')
const { getPokemonSeed, users, ratings, comments } = require('./seedData')

// Seed can be run anytime with `npm run seed`//
const seed = async () => {
  try {
    // this builds the seeds from `data/all.json`
    const pokemonSeed = getPokemonSeed(data)

      // this deletes contents of models before seeding & resets autoincrement ID to 1
      await prisma.$queryRaw`TRUNCATE TABLE "Pokemon" RESTART IDENTITY CASCADE`
      await prisma.$queryRaw`TRUNCATE TABLE "Comment" RESTART IDENTITY CASCADE`
      await prisma.$queryRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`
      await prisma.$queryRaw`TRUNCATE TABLE "Rating" RESTART IDENTITY CASCADE`

      // this seeds the models
      await prisma.user.createMany({
        data: users
      })

      await prisma.pokemon.createMany({
        data: pokemonSeed        
      })

      await prisma.rating.createMany({
        data: ratings
      })

      await prisma.comment.createMany({
        data: comments        
      })

      //this adds the many-many relations between pokemon and type/ability
      // for (let i = 0; i < data.pokemon.length; i++) {

      //   const types = data.pokemon[i].type.map(poke => ({ id: TYPEID[poke.type]}))
      //   const abilities = data.pokemon[i].ability.map(poke => ({ id: ABILITYID[poke.ability]}))

      //   await prisma.pokemon.update({
      //   where: { pokedex: data.pokemon[i].pokedex },
      //   data: {
      //     type: {
      //       connect: types,
      //     },
      //     ability: {
      //       connect: abilities,
      //     },
      //   },
      // })
      // }
  } catch (e) {
      console.error(e)
      process.exit(1)
  } finally {
      await prisma.$disconnect()
  }
}

seed()