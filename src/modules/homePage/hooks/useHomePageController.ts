import { useEffect, useState } from 'react'
import { type AxiosError, type AxiosResponse } from 'axios'
import { type HomePageProps } from '../types/homePageType'
import { type HomePageErrorType } from '../types/homePageErrorType'
import { Request } from '../services/request'

export const useHomePageController = () => {
  const [response, setResponse] = useState<AxiosResponse<HomePageProps>>()
  const [responseError, setResponseError] =
    useState<AxiosError<HomePageErrorType>>()

  const responseRequest = () => {
    Request()
      .then((res: AxiosResponse<HomePageProps>) => {
        setResponse(res)
      })
      .catch((error: AxiosError<HomePageErrorType>) => {
        setResponseError(error)
      })
  }

  useEffect(() => {
    responseRequest()
  }, [])

  return { response, responseError }
}
