import { createProxyMiddleware } from 'http-proxy-middleware'

const API_URL = process.env.NEXT_PUBLIC_API_URL
const API_KEY = process.env.NEXT_PUBLIC_API_KEY

const proxy = createProxyMiddleware({
  target: API_URL,
  changeOrigin: true,
  pathRewrite: {
    '^/api': ''
  },
  headers: {
    Authorization: 'Bearer ' + API_KEY
  }
})

export default proxy
