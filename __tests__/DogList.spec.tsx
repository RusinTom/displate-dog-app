import { render, screen } from '@testing-library/react'
import React from 'react'

import { DogList } from '../src/components/Dog/DogList'

describe('DogList', () => {
  it('render the appropriate number of buttons', () => {
    const dogBreeds = { beagle: [], bulldog: ['boston', 'english', 'french'] }
    render(<DogList dogBreeds={dogBreeds} handleModalOpen={jest.fn()} />)

    expect(screen.getAllByRole('button')).toHaveLength(5)
  })

  it('render breed titles', () => {
    const dogBreeds = { beagle: [], bulldog: ['boston', 'english', 'french'] }
    render(<DogList dogBreeds={dogBreeds} handleModalOpen={jest.fn()} />)

    expect(
      screen.getByRole('heading', { name: /bulldog/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /beagle/i })).toBeInTheDocument()
  })

  it('render breed buttons with the appropriate text', () => {
    const dogBreeds = { beagle: [], bulldog: ['boston', 'english', 'french'] }
    render(<DogList dogBreeds={dogBreeds} handleModalOpen={jest.fn()} />)

    expect(screen.getByRole('button', { name: 'bulldog' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'beagle' })).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'bulldog boston' })
    ).toBeInTheDocument()
  })
})
