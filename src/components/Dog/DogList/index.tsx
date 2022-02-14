import React from 'react'
import styled from 'styled-components'

import { FlexWrapper } from '@/components/common/FlexWrapper'
import { BreedButton } from '@/components/Dog/Buttons/BreedButton'
import { colors } from '@/styles/shared/colors'

interface DogListProps {
  dogBreeds: Record<string, string[]>
}

const Card = styled.div`
  flex: 1 1 calc(33.33% - 3rem);
  margin: 1.5rem;
  padding: 1.5rem;
  border-radius: 4px;
  box-shadow: 0 16px 32px rgb(180 180 180 / 40%);
  background-color: ${colors.gray};
`

const DogListWrap = styled(FlexWrapper)`
  margin: 0 -1.5rem;
`

const ButtonsWrap = styled.div`
  margin: 0 -0.5rem;
`

const Title = styled.h3`
  margin-bottom: 1rem;
  text-transform: capitalize;
`

export const DogList = ({ dogBreeds }: DogListProps) => {
  return (
    <DogListWrap wrap="wrap">
      {Object.keys(dogBreeds).map(breed => (
        <Card key={breed}>
          <Title>{breed}</Title>
          <ButtonsWrap>
            <BreedButton name={breed} />
            {dogBreeds[breed].map(subBreed => (
              <BreedButton
                key={`${breed} ${subBreed}`}
                name={`${breed} ${subBreed}`}
              />
            ))}
          </ButtonsWrap>
        </Card>
      ))}
    </DogListWrap>
  )
}
