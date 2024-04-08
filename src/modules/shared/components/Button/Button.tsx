import { type ButtonHTMLAttributes } from 'react'
import { type ButtonProps } from './ButtonType'

export const Button = ({
  text,
  ...props
}: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      className="p-2 rounded-md hover:text-primary hover:bg-white-50 transition ease-in-out"
    >
      {text}
    </button>
  )
}
