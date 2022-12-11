import data from '../data/all.json'

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
  { option: 'Grass' },
  { option: 'Poison' },
  { option: 'Fire' },
  { option: 'Flying' },
  { option: 'Water' },
  { option: 'Bug' },
  { option: 'Normal' },
  { option: 'Electric' },
  { option: 'Ground' },
  { option: 'Fairy' },
  { option: 'Fighting' },
  { option: 'Psychic' },
  { option: 'Rock' },
  { option: 'Steel' },
  { option: 'Ice' },
  { option: 'Ghost' },
  { option: 'Dragon' },
  { option: 'Dark' },
]
