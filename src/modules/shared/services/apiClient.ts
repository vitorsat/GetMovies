import axios from 'axios'

export const apiClient = axios.create({
  baseURL: '/api',
  headers: {
    Authorization: 'Bearer ' + process.env.NEXT_PUBLIC_API_KEY
  }
})
