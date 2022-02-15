import styled, { keyframes } from 'styled-components'

import { colors } from '@/styles/shared/colors'

interface IRingProps {
  size: number
}

interface IRingElementProps {
  size: number
  borderSize: number
  borderColor?: string
}

const animate = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

export const Ring = styled.div<IRingProps>`
  display: inline-block;
  position: relative;
  width: ${props => props.size + 'px'};
  height: ${props => props.size + 'px'};
  margin-left: 2rem;
`

export const RingElement = styled.div<IRingElementProps>`
  display: block;
  position: absolute;
  width: ${props => props.size + 'px'};
  height: ${props => props.size + 'px'};
  border: ${props =>
    props.borderColor
      ? `${props.borderSize}px solid ${props.borderColor}`
      : `${props.borderSize}px solid ${colors.turquoise}`};
  border-radius: 50%;
  animation: ${animate} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: ${props =>
    props.borderColor
      ? `${props.borderColor} transparent transparent transparent;`
      : `${colors.turquoise} transparent transparent transparent`};
`

export const RingElementSecond = styled(RingElement)`
  animation-delay: -0.45s;
`
export const RingElementThird = styled(RingElement)`
  animation-delay: -0.3s;
`

export const RingElementFourth = styled(RingElement)`
  animation-delay: -0.15s;
`
