import React, { FC } from 'react'
import styled from 'styled-components'

const MainContent = styled.main`
  flex: 1;
`
export const Main: FC = ({ children }) => {
  return <MainContent>{children}</MainContent>
}
