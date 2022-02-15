import React from 'react'

import { Button } from '@/components/common/Button/Button'

interface IBreedButtonProps {
  name: string
  breedUrl: string
  handleModalOpen: (breedUrl: string, title: string) => void
}

export const BreedButton = ({
  name,
  breedUrl,
  handleModalOpen
}: IBreedButtonProps) => {
  return <Button onClick={() => handleModalOpen(breedUrl, name)}>{name}</Button>
}
