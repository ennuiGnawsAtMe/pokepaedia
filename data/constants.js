import data from './all.json'

const getNameOptions = () => {
  return data.pokemon.map(poke => ({ option: poke.name }))
}

export const nameOptions = getNameOptions()

export const statusOptions = [
  { option: 'Baby' },
  { option: 'Mythical' },
  { option: 'Legendary' },
]

export const rankOptions = [
  { option: 'Top 10' },
  { option: '10 - 100' },
  { option: '101 - 200' },
  { option: '201 - 300' },
  { option: '301 - 400' },
  { option: '401 - 500' },
  { option: '501 - 600' },
  { option: '601 - 700' },
  { option: '701 - 800' },
  { option: '801 - 898' },
]

export const typeOptions = [
  { value: 'grass', label: 'Grass' },
  { value: 'poison', label: 'Poison' },
  { value: 'fire', label: 'Fire' },
  { value: 'flying', label: 'Flying' },
  { value: 'water', label: 'Water' },
  { value: 'bug', label: 'Bug' },
  { value: 'normal', label: 'Normal' },
  { value: 'electric', label: 'Electric' },
  { value: 'ground', label: 'Ground' },
  { value: 'fairy', label: 'Fairy' },
  { value: 'fighting', label: 'Fighting' },
  { value: 'psychic', label: 'Psychic' },
  { value: 'rock', label: 'Rock' },
  { value: 'steel', label: 'Steel' },
  { value: 'ice', label: 'Ice' },
  { value: 'ghost', label: 'Ghost' },
  { value: 'dragon', label: 'Dragon' },
  { value: 'dark', label: 'Dark' },
]
