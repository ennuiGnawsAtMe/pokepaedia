
const Home = ({ pokemon }) => {
    return (
        <div>
          {pokemon.map(poke => (
            <div key={poke.pokedex}>
              <h1 className="font-bold underline text-3xl" >{poke.name}</h1>
              <h2 >{poke.ranking}</h2>
            </div>
          )
           )}
        </div>
    )
}

export default Home