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
      <Link href={'/'}>voltar</Link>
    </main>
  )
}
