import { useState } from 'react'

export const useModal = (isOpen = false) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen)
  const toggleModalOpenStatus = () => setIsModalOpen(!isModalOpen)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return { isModalOpen, openModal, closeModal, toggleModalOpenStatus }
}
