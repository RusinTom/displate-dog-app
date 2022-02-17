import { fireEvent, screen, waitFor } from '@testing-library/react'
import { DefaultRequestBody, rest } from 'msw'
import React, { ReactNode } from 'react'

import { server } from '../jest.setup'
import { baseURL } from '../src/api/axios'
import DogModal from '../src/components/Dog/DogModal/DogModal'
import { renderWithClient } from './__utils__'

beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation(jest.fn())
})

jest.mock('react-dom', () => {
  return {
    ...jest.requireActual('react-dom'),
    createPortal: (element: ReactNode, target: HTMLElement) => {
      return element
    }
  }
})

describe('DogModal', () => {
  it('render modal', () => {
    renderWithClient(
      <DogModal
        title="beagle"
        breedUrl="beagle"
        isOpen={true}
        onClose={jest.fn()}
      />
    )

    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  it('render modal with error message if fetch failed', async () => {
    server.use(
      rest.get<DefaultRequestBody>(
        `${baseURL}/breed/beagle/images/random`,
        (req, res, ctx) => {
          return res(ctx.delay(100), ctx.status(500))
        }
      )
    )

    renderWithClient(
      <DogModal
        title="beagle"
        breedUrl="beagle"
        isOpen={true}
        onClose={jest.fn()}
      />
    )

    const error = await screen.findByText(/Technical problems have occurred/i)
    expect(error).toBeInTheDocument()
  })

  it('render modal with image', async () => {
    renderWithClient(
      <DogModal
        title="beagle"
        breedUrl="beagle"
        isOpen={true}
        onClose={jest.fn()}
      />
    )

    await waitFor(() => {
      expect(screen.getByAltText('beagle')).toBeInTheDocument()
    })
  })

  it('render modal with next image', async () => {
    server.use(
      rest.get<DefaultRequestBody>(
        `${baseURL}/breed/beagle/images/random`,
        (req, res, ctx) => {
          return res(
            ctx.delay(100),
            ctx.json({
              message:
                'https://images.dog.ceo/breeds/affenpinscher/newImage.jpg',
              status: 'success'
            })
          )
        }
      )
    )
    renderWithClient(
      <DogModal
        title="bulldog"
        breedUrl="beagle"
        isOpen={true}
        onClose={jest.fn()}
      />
    )

    const nextButton = screen.getByText('Next image')
    fireEvent.click(nextButton)

    await waitFor(() => {
      expect(screen.getByAltText('bulldog')).toBeInTheDocument()
    })
  })
})
