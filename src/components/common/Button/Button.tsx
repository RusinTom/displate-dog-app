import React from 'react'

import { StyledButton } from '@/components/common/Button/styles/ButtonStyles'
import { LoadingSpinner } from '@/components/common/LoadingSpinner/LoadingSpinner'
import { colors } from '@/styles/shared/colors'

export enum BUTTON_STATUS_ENUM {
  idle = 'idle',
  loading = 'loading'
}

export enum BUTTON_VARIANT_ENUM {
  primary = 'primary',
  secondary = 'secondary'
}

export type ButtonVariant =
  | BUTTON_VARIANT_ENUM.primary
  | BUTTON_VARIANT_ENUM.secondary
export type ButtonStatus = BUTTON_STATUS_ENUM.loading | BUTTON_STATUS_ENUM.idle

export interface IButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant?: ButtonVariant
  status?: ButtonStatus
}

export const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(
  (
    {
      variant = BUTTON_VARIANT_ENUM.primary,
      status = BUTTON_STATUS_ENUM.idle,
      children,
      ...rest
    },
    ref
  ) => {
    return (
      <StyledButton
        ref={ref}
        status={status}
        variant={variant}
        disabled={status === BUTTON_STATUS_ENUM.loading}
        {...rest}
      >
        {children}
        {status === BUTTON_STATUS_ENUM.loading && (
          <LoadingSpinner
            size={15}
            borderSize={2}
            borderColor={colors.turquoiseLight}
          />
        )}
      </StyledButton>
    )
  }
)
Button.displayName = 'Button'
