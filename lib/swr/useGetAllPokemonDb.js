import axios from 'axios'
import useSWR from 'swr'

export const fetcher = async (url) => {
  const res = await axios.get(url)
  return res.data
}

export const useGetAllPokemonDb = () => {
  const { data, error, mutate, isValidating } = useSWR(`/api/pokemon`, fetcher, { revalidateOnFocus: false })

  return {
    allPokemonDb: data,
    isLoading: !error && !data,
    isError: error,
    isValidating: isValidating,
    mutateAllPokemonDb: mutate
  }
}