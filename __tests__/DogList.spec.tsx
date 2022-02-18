import { screen } from '@testing-library/react'
import React from 'react'

import { DogList } from '../src/components/Dog/DogList/DogList'
import { renderWithClient } from './__utils__'

describe('DogList', () => {
  const dogBreeds = { beagle: [], bulldog: ['boston', 'english', 'french'] }

  it('render the appropriate number of buttons', () => {
    renderWithClient(
      <DogList dogBreeds={dogBreeds} handleModalOpen={jest.fn()} />
    )

    expect(screen.getAllByRole('button')).toHaveLength(5)
  })

  it('render breed titles', () => {
    renderWithClient(
      <DogList dogBreeds={dogBreeds} handleModalOpen={jest.fn()} />
    )

    expect(
      screen.getByRole('heading', { name: /bulldog/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /beagle/i })).toBeInTheDocument()
  })

  it('render breed buttons with the appropriate text', () => {
    renderWithClient(
      <DogList dogBreeds={dogBreeds} handleModalOpen={jest.fn()} />
    )

    expect(screen.getByRole('button', { name: 'bulldog' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'beagle' })).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'bulldog boston' })
    ).toBeInTheDocument()
  })
})
