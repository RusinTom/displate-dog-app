import React, { FC } from 'react'
import styled from 'styled-components'

import { colors } from '@/styles/shared/colors'

type AlertVariant = 'error' | 'success'

interface AlertWrapProps {
  type: AlertVariant
}

const AlertWrap = styled.div<AlertWrapProps>`
  padding: 0.5rem 1.5rem;
  background-color: ${props =>
    props.type === 'error' ? colors.error : colors.success};
`

interface AlertProps {
  type?: AlertVariant
}

export const Alert: FC<AlertProps> = ({ children, type = 'success' }) => {
  return <AlertWrap type={type}>{children}</AlertWrap>
}
