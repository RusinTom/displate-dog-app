import { AxiosResponse } from 'axios'

import { DOGS_API_ENDPOINTS_ENUM } from '@/api/Dogs/index'
import { IDogBreed } from '@/types/interfaces/IDogBreed'
import { IDogBreedImage } from '@/types/interfaces/IDogBreedImage'

import { get } from '../axios'

const createSingleBreedEndpoint = (breed: string): string => {
  return `/breed/${breed}/images/random`
}

interface DogBreedsApi {
  index: () => Promise<AxiosResponse<IDogBreed>>
  single: (breed: string) => Promise<AxiosResponse<IDogBreedImage>>
}

export const DogBreeds: DogBreedsApi = {
  index: () => get<IDogBreed>(DOGS_API_ENDPOINTS_ENUM.allBreeds),
  single: breed => get<IDogBreedImage>(createSingleBreedEndpoint(breed))
}
