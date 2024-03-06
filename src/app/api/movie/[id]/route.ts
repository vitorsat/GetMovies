import axios from 'axios'
import { type NextRequest, NextResponse } from 'next/server'

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL
    const apiToken = process.env.NEXT_PUBLIC_API_KEY

    const apiResponse = await axios.get(`${apiUrl}/movie/${params.id}`, {
      headers: {
        Authorization: `Bearer ${apiToken}`
      }
    })

    if (apiResponse.status === 200) {
      return NextResponse.json(apiResponse.data, { status: 200 })
    }
  } catch (error) {
    console.log(error)
    return NextResponse.json(error, { status: 500 })
  }
}
