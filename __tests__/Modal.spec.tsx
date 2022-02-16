import { render, screen } from '@testing-library/react'
import React, { ReactNode } from 'react'

import { Modal } from '../src/components/common/Modal'

jest.mock('react-dom', () => {
  return {
    ...jest.requireActual('react-dom'),
    createPortal: (element: ReactNode, target: HTMLElement) => {
      return element
    }
  }
})

describe('Modal', () => {
  it('render modal', () => {
    render(
      <Modal
        title={'Modal test'}
        closeLabel="Close"
        submitProps={{}}
        submitLabel="Ok"
        open={true}
        onClose={jest.fn()}
        onSubmit={jest.fn()}
      />
    )

    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  it('render modal with proper title', () => {
    render(
      <Modal
        title={'Modal test'}
        closeLabel="Close"
        submitProps={{}}
        submitLabel="Ok"
        open={true}
        onClose={jest.fn()}
        onSubmit={jest.fn()}
      />
    )

    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  it('render modal with proper submit button text', () => {
    render(
      <Modal
        title={'Modal test'}
        closeLabel="Close"
        submitProps={{}}
        submitLabel="Ok"
        open={true}
        onClose={jest.fn()}
        onSubmit={jest.fn()}
      />
    )

    expect(screen.getByText('Ok')).toBeInTheDocument()
  })

  it('render modal with proper close button text', () => {
    render(
      <Modal
        title={'Modal test'}
        closeLabel="Close"
        submitProps={{}}
        submitLabel="Ok"
        open={true}
        onClose={jest.fn()}
        onSubmit={jest.fn()}
      />
    )

    expect(screen.getByText('Close')).toBeInTheDocument()
  })

  it('render modal with proper body', () => {
    render(
      <Modal
        title={'Modal test'}
        closeLabel="Close"
        submitProps={{}}
        submitLabel="Ok"
        open={true}
        onClose={jest.fn()}
        onSubmit={jest.fn()}
      >
        <h2>Test body text</h2>
      </Modal>
    )

    expect(screen.getByText('Test body text')).toBeInTheDocument()
  })
})
