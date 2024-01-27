import { ROUTES } from './requestRoutes'
import { type AxiosResponse } from 'axios'
import { type HomePageProps } from '../types/homePageType'
import { apiClient } from '@/modules/shared/services/apiClient'

export const Request = async (): Promise<AxiosResponse<HomePageProps>> => {
  return await apiClient.get(ROUTES.POPULAR)
}
