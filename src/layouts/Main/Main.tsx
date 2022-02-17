import React, { FC } from 'react'
import styled from 'styled-components'

import { colors } from '@/styles/shared/colors'

const MainContent = styled.main`
  flex: 1;
  background-color: ${colors.grayBg};
`
export const Main: FC = ({ children }) => {
  return <MainContent>{children}</MainContent>
}
