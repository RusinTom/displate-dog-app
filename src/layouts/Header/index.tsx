import React from 'react'
import styled from 'styled-components'

import { colors } from '@/styles/shared/colors'

interface HeaderProps {
  title: string
}

const MainHeader = styled.header`
  padding: 1.5rem;
  background-color: ${colors.primaryColor};
`

const Title = styled.h1`
  color: white;
  text-align: center;
  letter-spacing: 1px;
`

const Header = ({ title }: HeaderProps) => {
  return (
    <MainHeader>
      <Title>{title}</Title>
    </MainHeader>
  )
}

export default Header
