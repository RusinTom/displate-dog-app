import { AxiosResponse } from 'axios'
import { useQuery } from 'react-query'

import { DogBreedsApi } from '@/api/Dogs/DogBreeds'
import { IDogBreed } from '@/types/interfaces/IDogBreed'

export const useDogBreeds = () => {
  const { isLoading, isError, data, error } = useQuery<
    AxiosResponse<IDogBreed>,
    string
  >('dogBreeds', DogBreedsApi.index)

  return { isLoading, isError, data, error }
}
