import { screen } from '@testing-library/react'
import React from 'react'

import { BreedButton } from '../src/components/Dog/Buttons/BreedButton'
import { renderWithClient } from './__utils__'

describe('BreedButton', () => {
  it('render button with the appropriate text', () => {
    renderWithClient(
      <BreedButton
        name="bulldog"
        breedUrl="bulldog"
        handleModalOpen={jest.fn()}
      />
    )
    expect(screen.getByText('bulldog')).toBeInTheDocument()
  })
})
