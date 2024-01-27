'use client'

import MoviePage from '@/modules/moviePage/pages/page'

export default function Movie({ params }: { params: { id: string } }) {
  console.log(params.id)

  return <MoviePage id={params.id} />
}
