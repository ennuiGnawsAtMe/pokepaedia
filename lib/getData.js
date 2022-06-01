

const sendDataToJson = async (namesArr) => {
    try {
        const names = shapeArray(namesArr)
        const data = await fetchData(names)
        console.log(data)

        // writeFile('./pokemon.json', JSON.stringify(data), error => {
        //     if (error) {
        //         console.log('An error has occurred ', error)
        //         return;
        //     }
        //     console.log('Data written successfully to disk')
        //     })
    } catch (e) {
        console.error(e)
    }
}

    
const shapeArray= (namesArray) => {
  const names =  namesArray.map(poke => poke.name.toLowerCase())
  console.log(names)
  return names
}

const fetchData = async (names) => {
  const data = await getPokemonAsync(names)
    console.log(data)

  return data
}

sendDataToJson(allPokemon)

