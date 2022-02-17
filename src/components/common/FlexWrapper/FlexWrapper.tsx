import styled from 'styled-components'

interface IFlexWrapperProps {
  justifyContent?:
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'center'
    | 'start'
    | 'end'
    | 'flex-start'
    | 'flex-end'
  alignItems?: 'center' | 'stretch' | 'start' | 'end' | 'inherit'
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
}

export const FlexWrapper = styled.div<IFlexWrapperProps>`
  display: flex;
  flex-direction: ${props => props.flexDirection || 'row'};
  flex-wrap: ${props => props.wrap || 'nowrap'};
  align-items: ${props => props.alignItems || 'inherit'};
  justify-content: ${props => props.justifyContent || 'start'};
`
