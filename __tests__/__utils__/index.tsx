import { render } from '@testing-library/react'
import { DefaultRequestBody, rest } from 'msw'
import * as React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

import { baseURL } from '../../src/api/axios'
import { DOGS_API_ENDPOINTS_ENUM } from '../../src/api/Dogs'

export const handlers = [
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
  ),
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
]

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false
      }
    }
  })

export function renderWithClient(ui: React.ReactElement) {
  const testQueryClient = createTestQueryClient()
  const { rerender, ...result } = render(
    <QueryClientProvider client={testQueryClient}>{ui}</QueryClientProvider>
  )
  return {
    ...result,
    rerender: (rerenderUi: React.ReactElement) =>
      rerender(
        <QueryClientProvider client={testQueryClient}>
          {rerenderUi}
        </QueryClientProvider>
      )
  }
}
