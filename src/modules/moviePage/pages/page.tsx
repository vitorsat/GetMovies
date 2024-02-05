import { Button } from '@/modules/shared/components/Button/Button'
import Link from 'next/link'

interface MoviePageProps {
  id: string
}

export default function MoviePage({ id }: MoviePageProps) {
  console.log(id)

  return (
    <main>
      <h1>oii</h1>
      <p>{id}</p>
      <Link href={'/'}>
        <Button text="Voltar" />
      </Link>
    </main>
  )
}
