import {
  act,
  fireEvent,
  render as rtlRender,
  RenderOptions,
  screen,
  waitFor,
  waitForElementToBeRemoved,
  within
} from '@testing-library/react'
import { DefaultRequestBody, rest } from 'msw'
import { setupServer } from 'msw/node'
import React, { ReactNode } from 'react'
import { QueryClient, QueryClientProvider, setLogger } from 'react-query'

import { baseURL } from '../src/api/axios'
import { DOGS_API_ENDPOINTS_ENUM } from '../src/api/Dogs'
import { Dog } from '../src/components/Dog'
import { DogList } from '../src/components/Dog/DogList'
import DogModal from '../src/components/Dog/DogModal/DogModal'

const server = setupServer(
  rest.get<DefaultRequestBody, any>(
    `${baseURL}/breed/beagle/images/random`,
    (req, res, ctx) => {
      return res(
        ctx.delay(200),
        ctx.json({
          message:
            'https://images.dog.ceo/breeds/affenpinscher/n02110627_13654.jpg',
          status: 'success'
        })
      )
    }
  )
)

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: false, enabled: false }
  }
})

setLogger({
  log: console.log,
  warn: console.warn,
  error: () => ({})
})

const render = (ui: ReactNode, { ...rtlOptions }: RenderOptions = {}) => {
  return rtlRender(
    <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>,
    {
      ...rtlOptions
    }
  )
}

beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation(jest.fn())
  server.listen()
})
afterAll(() => {
  server.close()
})
afterEach(() => {
  server.resetHandlers()
  queryClient.clear()
})

jest.mock('react-dom', () => {
  return {
    ...jest.requireActual('react-dom'),
    createPortal: (element: any, target: any) => {
      return element
    }
  }
})

describe('DogModal', () => {
  it('render modal', () => {
    render(
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
      rest.get<DefaultRequestBody, any>(
        `${baseURL}/breed/beagle/images/random`,
        (req, res, ctx) => {
          return res(ctx.delay(100), ctx.status(500))
        }
      )
    )

    render(
      <DogModal
        title="beagle"
        breedUrl="beagle"
        isOpen={true}
        onClose={jest.fn()}
      />
    )

    await screen.findByText(/Technical problems have occurred/i)
  })

  it('render modal with image', async () => {
    render(
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
      rest.get<DefaultRequestBody, any>(
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
    render(
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
