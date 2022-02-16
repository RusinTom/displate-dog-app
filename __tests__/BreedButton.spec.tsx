import { render, screen } from '@testing-library/react'
import React from 'react'

import { BreedButton } from '../src/components/Dog/Buttons/BreedButton'

describe('BreedButton', () => {
  it('render button with the appropriate text', () => {
    render(
      <BreedButton
        name="bulldog"
        breedUrl="bulldog"
        handleModalOpen={jest.fn()}
      />
    )
    expect(screen.getByText('bulldog')).toBeInTheDocument()
  })
})
