import axios from 'axios'
import { NextResponse } from 'next/server'

export async function GET(req: Request, res: Response) {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL
    const apiToken = process.env.NEXT_PUBLIC_API_KEY

    const apiResponse = await axios.get(`${apiUrl}/movie/top_rated`, {
      headers: {
        Authorization: `Bearer ${apiToken}`
      }
    })

    if (apiResponse.status === 200) {
      return NextResponse.json(apiResponse.data, { status: 200 })
    }
  } catch (error: any) {
    return NextResponse.json(error.response.data, {
      status: error.response.status
    })
  }
}
