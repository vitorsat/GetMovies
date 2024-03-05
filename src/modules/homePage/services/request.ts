import { type AxiosResponse } from 'axios'
import { type HomePageProps } from '../types/homePageType'
import { apiClient } from '@/modules/shared/services/apiClient'
import { ROUTES } from './requestRoutes'

export const Request = async (): Promise<AxiosResponse<HomePageProps>> => {
  return await apiClient.get(ROUTES.POPULAR)
}
