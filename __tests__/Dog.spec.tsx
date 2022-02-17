import {
  screen,
  waitFor,
  waitForElementToBeRemoved
} from '@testing-library/react'
import { DefaultRequestBody, rest } from 'msw'
import React from 'react'

import { server } from '../jest.setup'
import { baseURL } from '../src/api/axios'
import { DOGS_API_ENDPOINTS_ENUM } from '../src/api/Dogs'
import { Dog } from '../src/components/Dog/Dog'
import { DogList } from '../src/components/Dog/DogList/DogList'
import { renderWithClient } from './__utils__'

jest.mock('../src/components/Dog/DogList/DogList.tsx', () => ({
  ...jest.requireActual('../src/components/Dog/DogList/DogList.tsx'),
  DogList: jest.fn(() => <div>DogList</div>)
}))

const DogListMocked = jest.mocked(DogList)

beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation(jest.fn())
})

describe('Dog', () => {
  const loadingSpinner = () => screen.queryByRole('progressbar')

  it('render loading spinner', () => {
    renderWithClient(<Dog />)
    expect(loadingSpinner()).toBeInTheDocument()
  })

  it('render error if fetch failed', async () => {
    server.use(
      rest.get<DefaultRequestBody>(
        `${baseURL}${DOGS_API_ENDPOINTS_ENUM.allBreeds}`,
        (req, res, ctx) => {
          return res(ctx.delay(100), ctx.status(500))
        }
      )
    )
    renderWithClient(<Dog />)
    await waitForElementToBeRemoved(() => loadingSpinner())
    expect(
      screen.getByText(/Technical problems have occurred/i)
    ).toBeInTheDocument()
  })

  it('render DogList', async () => {
    renderWithClient(<Dog />)

    await waitForElementToBeRemoved(() => loadingSpinner())
    await waitFor(() => expect(DogListMocked).toHaveBeenCalled())
  })
})
