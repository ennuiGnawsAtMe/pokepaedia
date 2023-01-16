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
  // { value: 10, label: 'Top 10' },
  { value: 100, label: '1 - 100' },
  { value: 200, label: '101 - 200' },
  { value: 300, label: '201 - 300' },
  { value: 400, label: '301 - 400' },
  { value: 500, label: '401 - 500' },
  { value: 600, label: '501 - 600' },
  { value: 700, label: '601 - 700' },
  { value: 800, label: '701 - 800' },
  { value: 899, label: '801 - 899' },
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
