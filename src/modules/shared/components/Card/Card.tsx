import Image from 'next/image'
import { type CardPros } from './CardType'

export const Card = ({
  title,
  imageUrl,
  desc,
  width = 300,
  height = 400
}: CardPros) => {
  return (
    <div className="group w-max h-max p-2 rounded-md hover:bg-white-50 transition ease-in-out">
      <Image
        priority
        className="rounded-md w-auto h-auto"
        src={imageUrl}
        alt={title}
        width={width}
        height={height}
      />
      <h1 className="text-start pt-2 pl-1 pb-2 text-white group-hover:text-primary">
        {title}
      </h1>
      <p className="text-start mb-1 pl-1 text-white-100 group-hover:text-primary">
        {desc}
      </p>
    </div>
  )
}
