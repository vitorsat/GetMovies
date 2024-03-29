import { useEffect, useState } from 'react'
import { type AxiosError, type AxiosResponse } from 'axios'
import { type HomePageProps } from '../types/homePageType'
import { Request } from '../services/request'
import { type ErrorType } from '@/modules/shared/services/types/responseErrorType'

export const useHomePageController = () => {
  const [response, setResponse] = useState<AxiosResponse<HomePageProps>>()
  const [responseError, setResponseError] = useState<AxiosError<ErrorType>>()

  const responseRequest = () => {
    Request()
      .then((res: AxiosResponse<HomePageProps>) => {
        setResponse(res)
      })
      .catch((error: AxiosError<ErrorType>) => {
        setResponseError(error)
      })
  }

  useEffect(() => {
    responseRequest()
  }, [])

  return { response, responseError }
}
