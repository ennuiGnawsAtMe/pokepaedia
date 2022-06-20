import axios from 'axios'
import useSWR from 'swr'

export const fetcher = url => axios.get(url).then(res => res.data)

export const useAllPokemon = (fallback) => {
  const { data, error } = useSWR(`/api/pokemon`, fetcher)

  return {
    pokemonDb: data,
    isLoading: !error && !data,
    isError: error
  }
}