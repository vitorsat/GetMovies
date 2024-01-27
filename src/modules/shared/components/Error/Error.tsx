import { type ErrorProps } from './ErrorType'
import { ErrorIcon } from '../../../../../public/assets/ErrorIcon'

export const Error = ({ message }: ErrorProps) => {
  return (
    <div className="text-center h-screen w-full flex flex-col items-center justify-center">
      <div className="gap-2 flex flex-col items-center justify-center">
        <ErrorIcon />
        <h1>Ocorreu um erro:</h1>
        <p>{message}</p>
      </div>
    </div>
  )
}
