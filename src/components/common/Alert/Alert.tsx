import React, { FC } from 'react'
import styled from 'styled-components'

import { colors } from '@/styles/shared/colors'

type AlertVariant = 'error' | 'success'

interface IAlertWrapProps {
  type: AlertVariant
}

const AlertWrap = styled.div<IAlertWrapProps>`
  padding: 0.5rem 1.5rem;
  background-color: ${props =>
    props.type === 'error' ? colors.error : colors.success};
`

interface IAlertProps {
  type?: AlertVariant
}

export const Alert: FC<IAlertProps> = ({ children, type = 'success' }) => {
  return <AlertWrap type={type}>{children}</AlertWrap>
}
