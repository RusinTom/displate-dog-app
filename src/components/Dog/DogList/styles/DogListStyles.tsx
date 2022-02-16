import styled from 'styled-components'

import { FlexWrapper } from '@/components/common/FlexWrapper/FlexWrapper'
import { breakpoints, maxWidth } from '@/styles/shared/breakpoints'
import { colors } from '@/styles/shared/colors'

export const Card = styled.div`
  flex: 1 1 calc(33.33% - 3rem);
  margin: 1.5rem;
  padding: 1.5rem;
  border-radius: 4px;
  box-shadow: 0 16px 32px rgb(180 180 180 / 40%);
  background-color: ${colors.gray};

  ${maxWidth(breakpoints.lg)} {
    flex: 1 1 calc(50% - 3rem);
  }

  ${maxWidth(breakpoints.sm)} {
    flex: 1 1 100%;
  }
`

export const DogListWrap = styled(FlexWrapper)`
  margin: 0 -1.5rem;
`

export const ButtonsWrap = styled(FlexWrapper)`
  margin: 0 -0.5rem;
`

export const Title = styled.h3`
  margin-bottom: 1rem;
  text-transform: capitalize;
`
