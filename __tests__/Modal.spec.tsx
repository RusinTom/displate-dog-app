import { screen } from '@testing-library/react'
import React, { ReactNode } from 'react'

import { Modal } from '../src/components/common/Modal/Modal'
import { renderWithClient } from './__utils__'

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
    renderWithClient(
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
    renderWithClient(
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
    renderWithClient(
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
    renderWithClient(
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
    renderWithClient(
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
