import React from 'react'
import styled from 'styled-components'

import { breakpoints, maxWidth } from '@/styles/shared/breakpoints'
import { colors } from '@/styles/shared/colors'

interface BreedButtonProps {
  name: string
}

const Button = styled.button`
  padding: 0.4rem 1.5rem;
  margin: 0.5rem;
  font-size: 1.4rem;
  color: white;
  background-color: ${colors.turquoise};
  border-radius: 4px;
  border: 1px solid ${colors.turquoise};
  transition: all 0.2s;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: ${colors.turquoiseDark};
  }
  &:focus {
    outline: none;
    background-color: ${colors.turquoiseDark};
    border: 1px solid ${colors.turquoiseLight};
  }
  &:active {
    background-color: ${colors.turquoiseDark};
  }

  ${maxWidth(breakpoints.lg)} {
    font-size: 1.2rem;
    padding: 0 1rem;
  }
`

export const BreedButton = ({ name }: BreedButtonProps) => {
  return <Button>{name}</Button>
}
