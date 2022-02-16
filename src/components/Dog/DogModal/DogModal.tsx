import { AxiosResponse } from 'axios'
import { AnimatePresence } from 'framer-motion'
import React, { useEffect, useMemo } from 'react'
import { useQuery } from 'react-query'

import { DogBreedsApi } from '@/api/Dogs/DogBreeds'
import { Alert } from '@/components/common/Alert'
import { BUTTON_STATUS_ENUM } from '@/components/common/Button/Button'
import { FlexWrapper } from '@/components/common/FlexWrapper'
import { LoadingSpinner } from '@/components/common/LoadingSpinner'
import { Modal } from '@/components/common/Modal'
import { IDogBreedImage } from '@/types/interfaces/IDogBreedImage'

import { Image } from './Image'

interface IDogModalProps {
  title: string
  breedUrl: string
  isOpen: boolean
  onClose: () => void
}

const DogModal = ({ title, breedUrl, isOpen, onClose }: IDogModalProps) => {
  const { isFetching, isError, data, error, refetch } = useQuery<
    AxiosResponse<IDogBreedImage>,
    string
  >('dogImage', () => DogBreedsApi.single(breedUrl), {
    enabled: false,
    refetchOnWindowFocus: false
  })

  const imageUrl = useMemo(() => data?.data?.message, [data])

  useEffect(() => {
    refetch()
  }, [breedUrl, refetch])

  const nextImage = () => {
    return refetch()
  }

  return (
    <Modal
      title={title}
      closeLabel="Close"
      submitLabel="Next image"
      open={isOpen}
      submitProps={{
        status: isFetching
          ? BUTTON_STATUS_ENUM.loading
          : BUTTON_STATUS_ENUM.idle
      }}
      onClose={onClose}
      onSubmit={nextImage}
    >
      {isFetching && (
        <FlexWrapper justifyContent="center" alignItems="center">
          <LoadingSpinner size={100} borderSize={3} />
        </FlexWrapper>
      )}

      {isError && <Alert type="error">{error}</Alert>}

      {imageUrl && (
        <AnimatePresence>
          {!isFetching && <Image key={imageUrl} url={imageUrl} />}
        </AnimatePresence>
      )}
    </Modal>
  )
}

export default DogModal
