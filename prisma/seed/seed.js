const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const data = require('../../data/all.json')
const { getPokemonSeed, users, ratings, comments } = require('./seedData')

// Seed can be run anytime with `npm run seed`//
const seed = async () => {
  try {
    // this builds the seeds from `data/all.json`
    const pokemonSeed = getPokemonSeed(data)

    // this deletes contents of models before seeding & resets autoincrement ID to 1
    await prisma.$queryRaw`TRUNCATE TABLE "Pokemon" RESTART IDENTITY CASCADE`
    await prisma.$queryRaw`TRUNCATE TABLE "Rating" RESTART IDENTITY CASCADE`

    // this seeds the models
    // await prisma.user.createMany({
    //   data: users
    // })

    await prisma.pokemon.createMany({
      data: pokemonSeed,
    })

    // await prisma.rating.createMany({
    //   data: ratings
    // })

    // await prisma.comment.createMany({
    //   data: comments
    // })
  } catch (e) {
    console.error(e)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

seed()
