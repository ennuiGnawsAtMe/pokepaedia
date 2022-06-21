import axios from 'axios'
import useSWR from 'swr'

export const fetcher = async (url) => {
  const res = await axios.get(url)
  return res.data
}

export const useAllPokemon = () => {
  const { data, error } = useSWR(`/api/pokemon`, fetcher)

  return {
    pokemonDb: data,
    isLoading: !error && !data,
    isError: error
  }
}