import PokemonCarousel from './PokemonCarousel'
import NameForm from './NameForm'

export default async function Page() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <PokemonCarousel />
      <div className=""></div>
    </div>
  )
}
