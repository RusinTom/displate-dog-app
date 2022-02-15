import { AxiosResponse } from 'axios'
import { AnimatePresence } from 'framer-motion'
import React, { useEffect, useMemo, useState } from 'react'
import { useQuery } from 'react-query'

import { DogBreeds } from '@/api/Dogs/DogBreeds'
import { Alert } from '@/components/common/Alert'
import { FlexWrapper } from '@/components/common/FlexWrapper'
import { LoadingSpinner } from '@/components/common/LoadingSpinner'
import { Modal } from '@/components/common/Modal'
import { IDogBreedImage } from '@/types/interfaces/IDogBreedImage'

import { Image } from './Image'

interface DogModalProps {
  title: string
  breedUrl: string
  isOpen: boolean
  onClose: () => void
}

const DogModal = ({ title, breedUrl, isOpen, onClose }: DogModalProps) => {
  const [dogImageUrl, setDogImageUrl] = useState<string>('')
  const { isFetching, isError, data, error, refetch } = useQuery<
    AxiosResponse<IDogBreedImage>,
    string
  >('dogImage', () => DogBreeds.single(breedUrl), {
    enabled: false,
    refetchOnWindowFocus: false
  })
  const imageUrl = useMemo(() => data?.data?.message, [data])

  useEffect(() => {
    refetch()
  }, [breedUrl, refetch])

  useEffect(() => {
    if (imageUrl) {
      setDogImageUrl(imageUrl)
    }
  }, [imageUrl])

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
        status: isFetching ? 'loading' : 'idle'
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

      {data?.data?.message && (
        <AnimatePresence>
          {!isFetching && <Image key={dogImageUrl} url={dogImageUrl} />}
        </AnimatePresence>
      )}
    </Modal>
  )
}

export default DogModal
