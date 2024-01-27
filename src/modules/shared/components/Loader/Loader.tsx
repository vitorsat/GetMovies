import { LoaderIcon } from '../../../../../public/assets/LoaderIcon'

export const Loader = () => {
  return (
    <div className="text-center h-screen w-full flex flex-col items-center justify-center">
      <div className="gap-2 flex flex-col items-center justify-center">
        <LoaderIcon />
      </div>
    </div>
  )
}
