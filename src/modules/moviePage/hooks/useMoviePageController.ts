import { useCallback, useEffect, useState } from 'react'
import { type AxiosError, type AxiosResponse } from 'axios'
import { Request } from '../services/request'
import { type ErrorType } from '@/modules/shared/services/types/responseErrorType'
import { type MovieType } from '../types/movieType'

export const useMoviePageController = (id: string) => {
  const [response, setResponse] = useState<AxiosResponse<MovieType>>()
  const [responseError, setResponseError] = useState<AxiosError<ErrorType>>()

  const responseRequest = useCallback(() => {
    Request(id)
      .then((res: AxiosResponse<MovieType>) => {
        setResponse(res)
      })
      .catch((error: AxiosError<ErrorType>) => {
        setResponseError(error)
      })
  }, [id])

  useEffect(() => {
    responseRequest()
  }, [id, responseRequest])

  return { response, responseError }
}
