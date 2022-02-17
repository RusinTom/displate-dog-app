import React, { FC, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'

import {
  BUTTON_STATUS_ENUM,
  BUTTON_VARIANT_ENUM,
  IButtonProps
} from '@/components/common/Button/Button'
import {
  Body,
  Content,
  Footer,
  Header,
  ModalButton,
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
  const ref = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (ref.current && submitProps?.status !== BUTTON_STATUS_ENUM.loading) {
      ref.current.focus()
    }
  }, [ref, submitProps?.status])

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
          <ModalButton
            variant={BUTTON_VARIANT_ENUM.secondary}
            onClick={onClose}
          >
            {closeLabel}
          </ModalButton>
          <ModalButton ref={ref} onClick={onSubmit} {...submitProps}>
            {submitLabel}
          </ModalButton>
        </Footer>
      </Content>
    </ModalWindow>,
    document.getElementById('root') as HTMLElement
  )
}
