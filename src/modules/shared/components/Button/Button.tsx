import { type ButtonHTMLAttributes } from 'react'
import { type ButtonProps } from './ButtonType'

export const Button = ({
  text
}: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button className="p-2 rounded-md hover:text-black hover:bg-[#d8dde6] transition ease-in-out">
      {text}
    </button>
  )
}
