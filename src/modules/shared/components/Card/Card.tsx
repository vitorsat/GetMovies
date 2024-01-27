import Image from 'next/image'
import { type CardPros } from './CardType'

export const Card = ({
  title,
  imageUrl,
  desc,
  width = 300,
  heigt = 400
}: CardPros) => {
  return (
    <div className="w-max h-max">
      <Image
        className="rounded-md w-auto h-auto"
        src={imageUrl}
        alt={title}
        width={width}
        height={heigt}
      />
      <h1 className="text-center mb-2">{title}</h1>
      <p>{desc}</p>
    </div>
  )
}
