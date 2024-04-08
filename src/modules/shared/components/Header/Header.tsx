'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
// precisa criar o estilo pra quando está selecionado

export const Header = () => {
  const path = usePathname()
  console.log(path)

  return (
    <div className="sticky top-0 w-full p-4 flex flex-row gap-6 bg-primary">
      <Link href={'/'}>
        <h1 className="text-white hover:text-white-100 cursor-pointer">
          Destaques
        </h1>
      </Link>
      <Link href={'/toprated'}>
        <h1 className="text-white hover:text-white-100 cursor-pointer">
          Mais Bem avaliados
        </h1>
      </Link>
    </div>
  )
}
