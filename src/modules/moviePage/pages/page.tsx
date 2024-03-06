import { Button } from '@/modules/shared/components/Button/Button'
import Link from 'next/link'
import { useMoviePageController } from '../hooks/useMoviePageController'
import Image from 'next/image'
import { PATH_URL } from '@/modules/shared/Contants/globalConsts'
import { Loader } from '@/modules/shared/components/Loader/Loader'
import { Error } from '@/modules/shared/components/Error/Error'

interface MoviePageProps {
  id: string
}

export default function MoviePage({ id }: MoviePageProps) {
  const { response, responseError } = useMoviePageController(id)
  const data = response?.data
  const error = responseError?.response?.data

  if (!data && !error) {
    return <Loader />
  }

  if (error) {
    return <Error message={error.status_message} />
  }

  return (
    data && (
      <main>
        <h1>{data?.original_title}</h1>
        <p>{data?.status}</p>
        <Image
          src={PATH_URL + data.backdrop_path}
          alt={data.original_title}
          width={200}
          height={200}
        />
        <Link href={'/'}>
          <Button text="Voltar" />
        </Link>
      </main>
    )
  )
}
