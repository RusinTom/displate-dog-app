import styled from 'styled-components'

import {
  BUTTON_VARIANT_ENUM,
  ButtonStatus,
  ButtonVariant
} from '@/components/common/Button/Button'
import { breakpoints, maxWidth } from '@/styles/shared/breakpoints'
import { colors } from '@/styles/shared/colors'

interface IStyledButtonProps {
  status: ButtonStatus
  variant: ButtonVariant
  disabled: boolean
}

export const StyledButton = styled.button<IStyledButtonProps>`
  display: flex;
  align-items: center;
  padding: 0.4rem 1.5rem;
  margin: 0.5rem;
  font-size: 1.4rem;
  color: ${props =>
    props.variant === BUTTON_VARIANT_ENUM.primary ? 'white' : colors.textLight};
  background-color: ${props =>
    props.disabled
      ? colors.disabled
      : props.variant === BUTTON_VARIANT_ENUM.primary
      ? colors.turquoise
      : colors.gray};
  border-radius: 4px;
  border: 1px solid
    ${props =>
      props.disabled
        ? colors.disabled
        : props.variant === BUTTON_VARIANT_ENUM.primary
        ? colors.turquoise
        : colors.gray};
  transition: all 0.2s;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    color: white;
    background-color: ${props =>
      props.disabled
        ? colors.disabled
        : props.variant === BUTTON_VARIANT_ENUM.primary
        ? colors.turquoiseDark
        : colors.turquoiseLight};
  }
  &:focus {
    color: white;
    outline: none;
    background-color: ${props =>
      props.disabled
        ? colors.disabled
        : props.variant === BUTTON_VARIANT_ENUM.primary
        ? colors.turquoiseDark
        : colors.turquoiseLight};
    border: 1px solid
      ${props => (props.disabled ? colors.disabled : colors.turquoiseLight)};
  }
  &:active {
    color: white;
    background-color: ${props =>
      props.disabled
        ? colors.disabled
        : props.variant === BUTTON_VARIANT_ENUM.primary
        ? colors.turquoiseDark
        : colors.turquoiseLight};
  }

  ${maxWidth(breakpoints.lg)} {
    font-size: 1.2rem;
    padding: 0 1rem;
  }
`
