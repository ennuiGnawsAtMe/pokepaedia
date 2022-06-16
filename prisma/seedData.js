const generateRandomFloatInRange = (min, max, places) => {
  const value = (Math.random() * (max - min + 1)) + min
  const number = parseFloat(value).toFixed(places)
  return Number(number)
}

const getPokemonSeed = (data) => {
  const pokemonSeed = data.pokemon.map(poke => {
  //   let randomRating = generateRandomFloatInRange(1, 4, 1)
    return { 
        pokedex: poke.pokedex, 
        name: poke.name,
        ratingOverall: 0
    }
  })
  return pokemonSeed
}

const users = [
  {
    id: 1,
    name: "Rata Marley Rose"
      
  }, 
  {
    id: 2,
    name: "Riffen Huxley Moon"           
  }, 
  {
    id: 3,
    name: "Milo Haigh"      
  }, 
  {
    id: 4,
    name: "Luke Concannon"
  }
] 

const comments = [
    { comment: "What crazy eyes.", pokedex: 35, userId: 1 },
    { comment: "This guy is so strange. I'm not sure I like it.", pokedex: 444, userId: 2 },
    { comment: "Stupid thing. It doesnt even have a tail.", pokedex: 567, userId: 3 },
    { comment: "I LOVE this little thing.", pokedex: 12, userId: 4 },
    { comment: "This is THE WORST pokemon!", pokedex: 24, userId: 4 },
    { comment: "I LOVE this little thing.", pokedex: 154, userId: 3 },
    { comment: "poo poo this smells like poo", pokedex: 123, userId: 2 },
    { comment: "This pokemons eyes are scary", pokedex: 654, userId: 1 }
]

const ratings = [
    { rating: 2, pokedex: 35, userId: 1 },
    { rating: 3, pokedex: 444, userId: 2 },
    { rating: 1, pokedex: 24, userId: 3 },
    { rating: 5, pokedex: 154, userId: 4 },
    { rating: 3, pokedex: 567, userId: 3 },
    { rating: 4, pokedex: 12, userId: 2 },
    { rating: 3, pokedex: 89, userId: 4 },
    { rating: 4, pokedex: 189, userId: 1 }
]

module.exports = {
    getPokemonSeed,
    users,
    ratings,
    comments
}