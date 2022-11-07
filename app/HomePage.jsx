
const Home = ({ pokemon }) => {
    return (
        <div>
          {pokemon.map(poke => (
            <>
              <h1 key={poke.pokedex}>{poke.name}</h1>
              <h2 key={poke.pokedex}>{poke.ranking}</h2>
            </>
          )
           )}
        </div>
    )
}

export default Home