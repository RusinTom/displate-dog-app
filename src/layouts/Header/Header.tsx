import React from 'react'
import styled from 'styled-components'

import { colors } from '@/styles/shared/colors'

interface IHeaderProps {
  title: string
}

const MainHeader = styled.header`
  padding: 1.5rem;
  background-color: ${colors.turquoise};
`

const Title = styled.h1`
  color: white;
  text-align: center;
  letter-spacing: 1px;
`

export const Header = ({ title }: IHeaderProps) => {
  return (
    <MainHeader>
      <Title>{title}</Title>
    </MainHeader>
  )
}
