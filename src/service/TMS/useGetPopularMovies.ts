/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import { useEffect, useState } from 'react'
import { ROUTES } from '../apiRoutes'
import { type PopularProps } from '@/types/PopularProps'

const useGetPopularMovies = () => {
  const [data, setData] = useState<PopularProps | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchData = async () => {
    try {
      setIsLoading(true)
      const response: PopularProps = await (await fetch(ROUTES.POPULAR)).json()
      console.log(response)
      setData(response)
    } catch (error) {
      setError(error as string)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    void fetchData()
  }, [])

  return { data, isLoading, error }
}

export default useGetPopularMovies
