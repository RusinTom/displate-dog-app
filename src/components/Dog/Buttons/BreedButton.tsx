import React from 'react'

import { Button } from '@/components/common/Button/Button'

interface BreedButtonProps {
  name: string
  breedUrl: string
  handleModalOpen: (breedUrl: string, title: string) => void
}

export const BreedButton = ({
  name,
  breedUrl,
  handleModalOpen
}: BreedButtonProps) => {
  return <Button onClick={() => handleModalOpen(breedUrl, name)}>{name}</Button>
}
