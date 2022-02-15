import { darken, lighten } from 'polished'

export interface Colors {
  default: string
  turquoise: string
  turquoiseDark: string
  turquoiseLight: string
  grayBg: string
  gray: string
  textLight: string
  error: string
  success: string
  disabled: string
}

export const colors: Colors = {
  default: '#0B0C10',
  turquoise: '#117899',
  turquoiseDark: darken(0.1, '#117899'),
  turquoiseLight: lighten(0.2, '#117899'),
  grayBg: '#f3f3ff',
  gray: '#F5F7FB',
  textLight: 'rgba(21, 25, 32, 0.5)',
  error: '#5f2120',
  success: '#1e4620',
  disabled: 'rgba(17, 120, 153, 0.5)'
}
