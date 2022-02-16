interface IBreakpoints {
  sm: 576
  md: 768
  lg: 992
  xl: 1200
}

const breakpoints: IBreakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
}

const minWidth = (breakpoint: number) => {
  return `@media (min-width: calc(${breakpoint}px + 1px))`
}

const maxWidth = (breakpoint: number) => {
  return `@media (max-width: ${breakpoint}px)`
}

const betweenWidth = (breakpointMin: number, breakpointMax: number) =>
  `@media (max-width: ${breakpointMax}px) and (min-width: calc(${breakpointMin}px + 1px))`

export { betweenWidth, breakpoints, maxWidth, minWidth }
