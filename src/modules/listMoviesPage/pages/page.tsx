import { Card } from '@/modules/shared/components/Card/Card'
import { useHomePageController } from '../hooks/useHomePageController'
import Link from 'next/link'
import { Loader } from '@/modules/shared/components/Loader/Loader'
import { Error } from '@/modules/shared/components/Error/Error'
import { PATH_URL } from '@/modules/shared/Contants/globalConsts'
import { Suspense } from 'react'
import { usePathname } from 'next/navigation'

export default function ListMoviesPage() {
  const path = usePathname()
  const { response, responseError } = useHomePageController(path)
  const data = response?.data
  const error = responseError?.response?.data

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
    <Suspense fallback={<Loader />}>
      <div className="flex-row flex gap-10 flex-wrap align-top justify-center">
        {data?.results?.map((item) => (
          <Link key={item.id} href={`movie/${item.id}`}>
            <Card
              key={item.id}
              title={item.title}
              imageUrl={PATH_URL + item.poster_path}
              desc={formatShowDateYear.format(new Date(item.release_date))}
              width={200}
              height={300}
            />
          </Link>
        ))}
      </div>
    </Suspense>
  )
}
