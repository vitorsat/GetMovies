import { type AxiosResponse } from 'axios'
import { apiClient } from '@/modules/shared/services/apiClient'
import { ROUTES } from './requestRoutes'
import { type MovieType } from '../types/movieType'

export const Request = async (
  id: string
): Promise<AxiosResponse<MovieType>> => {
  return await apiClient.get(`${ROUTES.MOVIE}/${id}`)
}
