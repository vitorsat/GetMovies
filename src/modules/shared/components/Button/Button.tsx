import { type ButtonProps } from './ButtonType'

export const Button = ({ text }: ButtonProps) => {
  return (
    <button className="p-2 rounded-md hover:text-primary hover:bg-white-50 transition ease-in-out">
      {text}
    </button>
  )
}
