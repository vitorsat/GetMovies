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
      <h1 className="text-start mb-2 p-2">{title}</h1>
      <p className="text-start mb-2 p-2">{desc}</p>
    </div>
  )
}
