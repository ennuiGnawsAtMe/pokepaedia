
const Home = ({ pokemon }) => {
  return (
    <div className="flex flex-row justify-center flex-wrap">
      {pokemon.map(poke => (
        <div className="p-4 bg-slate-800 rounded-md	m-2 text-center	flex flex-col justify-between	" key={poke.pokedex}>
          <h1 className="font-normal underline text-3xl text-white	" >{poke.name}</h1>
          <h2 className="text-white">{poke.ranking}</h2>
        </div>
      )
      )}
    </div>
  )
}

export default Home