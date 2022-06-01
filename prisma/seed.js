const { PrismaClient } = require('@prisma/client')
const { allPokemon } = require('./data')

const prisma = new PrismaClient();
 
// seed can be run anytime on npm run seed
const main = async () => {
  try {
      // this deletes models before seeding & resets autoincrement ID to 1
      await prisma.$queryRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`
      await prisma.$queryRaw`TRUNCATE TABLE "Pokemon" RESTART IDENTITY CASCADE`

      // this seeds User and Pokemon models
      await prisma.user.create({
        data: {
            name: 'Rātā Marley Rose'
        }
      })
      await prisma.pokemon.createMany({
        data: allPokemon
      })
  } catch (e) {
      console.error(e)
      process.exit(1)
  } finally {
      await prisma.$disconnect()
  }
}

main()