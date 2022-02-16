import React, { FC, useEffect } from 'react'
import ReactDOM from 'react-dom'

import {
  Button,
  BUTTON_VARIANT_ENUM,
  IButtonProps
} from '@/components/common/Button/Button'
import {
  Body,
  Content,
  Footer,
  Header,
  ModalWindow,
  Title
} from '@/components/common/Modal/styles/ModalStyles'

interface IModalProps {
  open: boolean
  onClose: () => void
  onSubmit: () => void
  title: string
  closeLabel: string
  submitLabel: string
  submitProps?: IButtonProps
}

export const Modal: FC<IModalProps> = ({
  open,
  onClose,
  onSubmit,
  title,
  closeLabel,
  submitLabel,
  submitProps,
  children
}) => {
  useEffect(() => {
    const closeOnEscapeKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    document.body.addEventListener('keydown', closeOnEscapeKeyDown)
    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKeyDown)
    }
  }, [onClose])

  if (!open) return null

  return ReactDOM.createPortal(
    <ModalWindow
      role="dialog"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
    >
      <Content
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
        onClick={e => e.stopPropagation()}
      >
        <Header>
          <Title>{title}</Title>
        </Header>
        <Body>{children}</Body>
        <Footer>
          <Button variant={BUTTON_VARIANT_ENUM.secondary} onClick={onClose}>
            {closeLabel}
          </Button>
          <Button onClick={onSubmit} {...submitProps}>
            {submitLabel}
          </Button>
        </Footer>
      </Content>
    </ModalWindow>,
    document.getElementById('root') as HTMLElement
  )
}
