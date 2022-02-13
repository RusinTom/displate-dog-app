import { AxiosResponse } from 'axios'

import { DOGS_API_ENDPOINTS_ENUM } from '@/api/Dogs/index'
import { DogBreedInterface } from '@/types/interfaces/DogBreedInterface'

import { get } from '../axios'

const createSingleBreedEndpoint = (breed: string): string => {
  return `/breeds/${breed}/images/random`
}

interface DogBreedsApi {
  index: () => Promise<AxiosResponse<DogBreedInterface>>
  single: (breed: string) => Promise<AxiosResponse>
}

export const DogBreeds: DogBreedsApi = {
  index: () => get<DogBreedInterface>(DOGS_API_ENDPOINTS_ENUM.allBreeds),
  single: breed => get(createSingleBreedEndpoint(breed))
}
