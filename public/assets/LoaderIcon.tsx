import { forwardRef, type Ref, type SVGProps } from 'react'

function LoaderIconBase(
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="200px"
      height="200px"
      viewBox="0 0 100 100"
      ref={ref}
      {...props}
      preserveAspectRatio="xMidYMid"
    >
      <circle
        cx="50"
        cy="50"
        fill="none"
        stroke="currentColor"
        strokeWidth="10"
        r="35"
        strokeDasharray="164.93361431346415 56.97787143782138"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          dur="1s"
          values="0 50 50;360 50 50"
          keyTimes="0;1"
        ></animateTransform>
      </circle>
    </svg>
  )
}

export const LoaderIcon = forwardRef(LoaderIconBase)
