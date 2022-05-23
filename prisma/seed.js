import { PrismaClient } from '@prisma/client'
import { allPokemon } from './pokemon'

const prisma = new PrismaClient();
 
async function main() {
  await prisma.users.create({
      data: {
          name: 'Rātā Marley Rose'
      }
  })

  await prisma.pokemon.createMany({
      data: allPokemon
  })
}

main()
  .catch((e) => {
      console.error(e)
      process.exit(1)
  })
  .finally (async () => {
      await prisma.$disconnect()
  })


