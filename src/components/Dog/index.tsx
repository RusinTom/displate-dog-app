import { AxiosResponse } from 'axios'
import React, { useMemo, useState } from 'react'
import { useQuery } from 'react-query'
import styled from 'styled-components'

import { DogBreedsApi } from '@/api/Dogs/DogBreeds'
import { Alert } from '@/components/common/Alert'
import { LoadingSpinner } from '@/components/common/LoadingSpinner'
import { DogList } from '@/components/Dog/DogList'
import DogModal from '@/components/Dog/DogModal/DogModal'
import { useModal } from '@/hooks/useModal'
import { IDogBreed } from '@/types/interfaces/IDogBreed'

const DogWrap = styled.div`
  margin: 3rem 0;
  display: flex;
  justify-content: center;
`

export const Dog = () => {
  const { isModalOpen, openModal, closeModal } = useModal()
  const { isLoading, isError, data, error } = useQuery<
    AxiosResponse<IDogBreed>,
    string
  >('dogBreeds', DogBreedsApi.index)
  const [breedUrl, setBreedUrl] = useState('')
  const [modalTitle, setModalTitle] = useState('')

  const dogBreeds = useMemo(() => data?.data?.message, [data])

  const handleModalOpen = (breedUrl: string, title: string) => {
    setBreedUrl(breedUrl)
    setModalTitle(title)
    openModal()
  }

  return (
    <DogWrap>
      {isLoading && <LoadingSpinner borderSize={5} size={150} />}
      {isError && !isLoading && <Alert type="error">{error}</Alert>}
      {!isError && !isLoading && dogBreeds && (
        <DogList handleModalOpen={handleModalOpen} dogBreeds={dogBreeds} />
      )}
      {breedUrl && (
        <DogModal
          title={modalTitle}
          breedUrl={breedUrl}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}
    </DogWrap>
  )
}
