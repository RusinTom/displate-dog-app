import React from 'react'
import styled from 'styled-components'

import { colors } from '@/styles/shared/colors'

const MainFooter = styled.footer`
  background-color: ${colors.primaryColor};
  padding: 0.5rem 1.5rem;
`

const FooterMessage = styled.p`
  color: white;
`

interface FooterProps {
  msg: string
}

export const Footer = ({ msg }: FooterProps) => {
  return (
    <MainFooter>
      <FooterMessage>{msg}</FooterMessage>
    </MainFooter>
  )
}
