import axios from 'axios'
import useSWR from 'swr'

export const fetcher = async (url) => {
  const res = await axios.get(url)
  return res.data
}

export const usePokemon = () => {
  const { data, error, mutate } = useSWR(`/api/pokemon`, fetcher, { revalidateOnFocus: false })

  return {
    pokemonDb: data,
    isLoading: !error && !data,
    isError: error,
    mutate: mutate
  }
}