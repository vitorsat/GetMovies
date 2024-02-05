import { Card } from '@/modules/shared/components/Card/Card'
import { useHomePageController } from '../hooks/useHomePageController'
import Link from 'next/link'
import { Loader } from '@/modules/shared/components/Loader/Loader'
import { Error } from '@/modules/shared/components/Error/Error'
// import Suspense from 'react' tentar implementar

export default function HomePage() {
  const { response, responseError } = useHomePageController()
  const data = response?.data
  const error = responseError?.response?.data
  const pathUrl = 'https://image.tmdb.org/t/p/w500'

  if (!data && !error) {
    return <Loader />
  }

  if (error) {
    return <Error message={error.status_message} />
  }

  const formatShowDateYear = new Intl.DateTimeFormat('pt-BR', {
    year: 'numeric'
  })

  return (
    <div className="w-screen p-2">
      <h1>Destaques</h1>
      <div className="w-full flex-row flex gap-10 flex-wrap align-top justify-center">
        {data?.results.map((item) => (
          <Link key={item.id} href={`movie/${item.id}`}>
            <Card
              key={item.id}
              title={item.title}
              imageUrl={pathUrl + item.poster_path}
              desc={formatShowDateYear.format(new Date(item.release_date))}
              width={300}
              height={400}
            />
          </Link>
        ))}
      </div>
    </div>
  )
}
