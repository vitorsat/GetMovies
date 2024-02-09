import axios from 'axios'

export const apiClient = axios.create({
  baseURL: '/api'
})

apiClient.interceptors.request.use((request) => {
  console.log('Starting Request', request)
  return request
})
