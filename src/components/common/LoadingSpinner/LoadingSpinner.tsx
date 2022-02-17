import React from 'react'

import {
  Ring,
  RingElement,
  RingElementFourth,
  RingElementSecond,
  RingElementThird
} from '@/components/common/LoadingSpinner/styles/LoadingSpinnerStyles'

interface ILoadingSpinnerProps {
  size: number
  borderSize: number
  borderColor?: string
}

export const LoadingSpinner = ({
  size,
  borderSize,
  borderColor
}: ILoadingSpinnerProps) => {
  return (
    <Ring size={size} role="progressbar">
      <RingElement
        size={size}
        borderSize={borderSize}
        borderColor={borderColor}
      />
      <RingElementSecond
        size={size}
        borderSize={borderSize}
        borderColor={borderColor}
      />
      <RingElementThird
        size={size}
        borderSize={borderSize}
        borderColor={borderColor}
      />
      <RingElementFourth
        size={size}
        borderSize={borderSize}
        borderColor={borderColor}
      />
    </Ring>
  )
}
