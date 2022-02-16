import { AxiosResponse } from 'axios'
import { useQuery } from 'react-query'

import { DogBreedsApi } from '@/api/Dogs/DogBreeds'
import { IDogBreedImage } from '@/types/interfaces/IDogBreedImage'

export const useDogImage = (breedUrl: string) => {
  const { isFetching, isError, data, error, refetch } = useQuery<
    AxiosResponse<IDogBreedImage>,
    string
  >('dogImage', () => DogBreedsApi.single(breedUrl), {
    enabled: false,
    refetchOnWindowFocus: false
  })

  return { isFetching, isError, data, error, refetch }
}
