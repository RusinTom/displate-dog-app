import React from 'react'
import styled from 'styled-components'

import { colors } from '@/styles/shared/colors'

interface FooterProps {
  msg: string
}

const MainFooter = styled.footer`
  background-color: ${colors.primaryColor};
  padding: 0.5rem 1.5rem;
`

const FooterMessage = styled.p`
  color: white;
`

const Footer = ({ msg }: FooterProps) => {
  return (
    <MainFooter>
      <FooterMessage>{msg}</FooterMessage>
    </MainFooter>
  )
}

export default Footer
