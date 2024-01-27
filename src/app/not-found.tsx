import Link from 'next/link'
import { ErrorIcon } from '../../public/assets/ErrorIcon'

export default function NotFound() {
  return (
    <div className="text-center h-screen w-full flex flex-col items-center justify-center">
      <div className="gap-2 flex flex-col items-center justify-center">
        <ErrorIcon />
        <h1>Não conseguimos achar essa pagina</h1>

        <Link href="/">Voltar para o inicio</Link>
      </div>
    </div>
  )
}
