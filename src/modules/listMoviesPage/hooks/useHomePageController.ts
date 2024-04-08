import { useEffect, useState } from 'react'
import { type AxiosError, type AxiosResponse } from 'axios'
import { type HomePageProps } from '../types/homePageType'
import { Request } from '../services/request'
import { type ErrorType } from '@/modules/shared/services/types/responseErrorType'

export const useHomePageController = (path: string) => {
  const [response, setResponse] = useState<AxiosResponse<HomePageProps>>()
  const [responseError, setResponseError] = useState<AxiosError<ErrorType>>()

  useEffect(() => {
    const responseRequest = () => {
      Request(path)
        .then((res: AxiosResponse<HomePageProps>) => {
          setResponse(res)
        })
        .catch((error: AxiosError<ErrorType>) => {
          setResponseError(error)
        })
    }

    responseRequest()
  }, [path])

  return { response, responseError }
}
