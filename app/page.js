import PokemonCarousel from './PokemonCarousel'
import EnterButton from './EnterButton'

export default async function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <PokemonCarousel />
      <EnterButton />
    </div>
  )
}
