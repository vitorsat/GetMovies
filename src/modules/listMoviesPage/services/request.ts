import { type AxiosResponse } from 'axios'
import { type HomePageProps } from '../types/homePageType'
import { apiClient } from '@/modules/shared/services/apiClient'
import { ROUTES } from './requestRoutes'

export const Request = async (
  path: string
): Promise<AxiosResponse<HomePageProps>> => {
  switch (path) {
    case '/':
      return await apiClient.get(ROUTES.POPULAR)
    case '/toprated':
      return await apiClient.get(ROUTES.TOPRATED)
    default:
      return await apiClient.get(ROUTES.POPULAR)
  }

  // return await apiClient.get(ROUTES.POPULAR)
}
