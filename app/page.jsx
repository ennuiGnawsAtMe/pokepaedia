'use client'

import Blurb from './Blurb'
import { getRandomPokemon } from '../utils/helpers'
import data from '../data/all.json'
import Banner from './Banner'
import Footer from './Footer'

export default async function Page() {
  const randomPokemon = getRandomPokemon(data.pokemon)

  return (
    <main className="flex h-screen flex-col items-center justify-between space-y-10">
      <span className="space-y-10">
        <Banner {...randomPokemon} />
        <Blurb {...randomPokemon} />
      </span>
      <Footer />
    </main>
  )
}
