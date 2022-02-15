import React, { FC } from 'react'

import { StyledButton } from '@/components/common/Button/styles/ButtonStyles'
import { LoadingSpinner } from '@/components/common/LoadingSpinner'
import { colors } from '@/styles/shared/colors'

export type ButtonVariant = 'primary' | 'secondary'
export type ButtonStatus = 'idle' | 'loading'

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant?: ButtonVariant
  status?: ButtonStatus
}

export const Button: FC<ButtonProps> = ({
  variant = 'primary',
  status = 'idle',
  children,
  ...rest
}) => {
  return (
    <StyledButton
      status={status}
      variant={variant}
      disabled={status === 'loading'}
      {...rest}
    >
      {children}
      {status === 'loading' && (
        <LoadingSpinner
          size={15}
          borderSize={2}
          borderColor={colors.turquoiseLight}
        />
      )}
    </StyledButton>
  )
}
