import { darken, lighten } from 'polished'

interface Colors {
  default: string
  turquoise: string
  turquoiseDark: string
  turquoiseLight: string
  grayBg: string
  gray: string
  textLight: string
}

export const colors: Colors = {
  default: '#0B0C10',
  turquoise: '#117899',
  turquoiseDark: darken(0.1, '#117899'),
  turquoiseLight: lighten(0.2, '#117899'),
  grayBg: '#f3f3ff',
  gray: '#F5F7FB',
  textLight: '#151920'
}
