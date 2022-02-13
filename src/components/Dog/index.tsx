import React from 'react'
import { useQuery } from 'react-query'

import { DogBreeds } from '@/api/Dogs/DogBreeds'

export const Dog = () => {
  const { isLoading, isError, data, error } = useQuery(
    'dogBreeds',
    DogBreeds.index
  )

  console.log('isLoading', isLoading)
  console.log('isError', isError)
  console.log('data', data)
  console.log('error', error)

  return (
    <div>
      <h1>Dog</h1>
    </div>
  )
}
