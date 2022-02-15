import React from 'react'

import { BreedButton } from '@/components/Dog/Buttons/BreedButton'
import {
  ButtonsWrap,
  Card,
  DogListWrap,
  Title
} from '@/components/Dog/DogList/styles/DogListStyles'

interface DogListProps {
  dogBreeds: Record<string, string[]>
  handleModalOpen: (breedUrl: string, title: string) => void
}

export const DogList = ({ dogBreeds, handleModalOpen }: DogListProps) => {
  return (
    <DogListWrap wrap="wrap">
      {Object.keys(dogBreeds).map(breed => (
        <Card key={breed}>
          <Title>{breed}</Title>
          <ButtonsWrap wrap="wrap">
            <BreedButton
              name={breed}
              breedUrl={breed}
              handleModalOpen={handleModalOpen}
            />
            {dogBreeds[breed].map(subBreed => (
              <BreedButton
                key={`${breed} ${subBreed}`}
                name={`${breed} ${subBreed}`}
                breedUrl={`${breed}/${subBreed}`}
                handleModalOpen={handleModalOpen}
              />
            ))}
          </ButtonsWrap>
        </Card>
      ))}
    </DogListWrap>
  )
}
