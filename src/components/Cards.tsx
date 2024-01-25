import useGetPopularMovies from '@/service/TMS/useGetPopularMovies'
import Image from 'next/image'

export const Cards = () => {
  const request = useGetPopularMovies()

  if (request.isLoading) {
    return <div>Carregando...</div>
  }

  if (request.error) {
    return <div>Erro ao carregar</div>
  }

  return request.data?.results.map((movie) => (
    <div key={movie.id}>
      <h1>{movie.title}</h1>
      <Image
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        width={300}
        height={400}
        priority
      />
    </div>
  ))
}
