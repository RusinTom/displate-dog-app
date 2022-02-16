import {
  render as rtlRender,
  RenderOptions,
  screen,
  waitFor,
  waitForElementToBeRemoved
} from '@testing-library/react'
import { DefaultRequestBody, rest } from 'msw'
import { setupServer } from 'msw/node'
import React, { ReactNode } from 'react'
import { QueryClient, QueryClientProvider, setLogger } from 'react-query'

import { baseURL } from '../src/api/axios'
import { DOGS_API_ENDPOINTS_ENUM } from '../src/api/Dogs'
import { Dog } from '../src/components/Dog'
import { DogList } from '../src/components/Dog/DogList'

const server = setupServer(
  rest.get<DefaultRequestBody, any>(
    `${baseURL}${DOGS_API_ENDPOINTS_ENUM.allBreeds}`,
    (req, res, ctx) => {
      return res(
        ctx.delay(100),
        ctx.json({
          message: { beagle: [], bulldog: ['boston', 'english', 'french'] },
          status: 'success'
        })
      )
    }
  )
)

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: false }
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

jest.mock('../src/components/Dog/DogList', () => ({
  ...jest.requireActual('../src/components/Dog/DogList'),
  DogList: jest.fn(() => <div>DogList</div>)
}))

const DogListMocked = jest.mocked(DogList)

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

describe('Dog', () => {
  it('renders loading spinner', () => {
    render(<Dog />)
    expect(screen.getByRole('progressbar')).toBeInTheDocument()
  })

  it('renders error if fetch failed', async () => {
    server.use(
      rest.get<DefaultRequestBody, any>(
        `${baseURL}${DOGS_API_ENDPOINTS_ENUM.allBreeds}`,
        (req, res, ctx) => {
          return res(ctx.delay(100), ctx.status(500))
        }
      )
    )
    render(<Dog />)
    await waitForElementToBeRemoved(() => screen.queryByRole('progressbar'))
    expect(
      screen.getByText(/Technical problems have occurred/i)
    ).toBeInTheDocument()
  })

  it('renders DogList', async () => {
    render(<Dog />)

    await waitForElementToBeRemoved(() => screen.queryByRole('progressbar'))

    await waitFor(() => expect(DogListMocked).toHaveBeenCalled())
  })
})
