import { AxiosResponse } from 'axios'
import React, { useMemo } from 'react'
import { useQuery } from 'react-query'
import styled from 'styled-components'

import { DogBreeds } from '@/api/Dogs/DogBreeds'
import { Alert } from '@/components/common/Alert'
import { LoadingSpinner } from '@/components/common/LoadingSpinner'
import { DogList } from '@/components/Dog/DogList'
import { DogBreedInterface } from '@/types/interfaces/DogBreedInterface'

const DogWrap = styled.div`
  margin: 3rem 0;
  display: flex;
  justify-content: center;
`

export const Dog = () => {
  const { isLoading, isError, data, error } = useQuery<
    AxiosResponse<DogBreedInterface>,
    string
  >('dogBreeds', DogBreeds.index)

  const dogBreeds = useMemo(() => data?.data?.message, [data])

  console.log('isLoading', isLoading)
  console.log('isError', isError)
  console.log('data', data)
  console.log('error', error)

  return (
    <DogWrap>
      {isLoading && <LoadingSpinner borderSize={5} size={150} />}
      {isError && !isLoading && <Alert type="error">{error}</Alert>}
      {!isError && !isLoading && dogBreeds && <DogList dogBreeds={dogBreeds} />}
    </DogWrap>
  )
}
