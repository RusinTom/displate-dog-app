import { act, renderHook } from '@testing-library/react-hooks'
import React from 'react'

import { useModal } from '../src/hooks/useModal'

describe('useModal', () => {
  it('set isModalOpen to true if openModal is fired', () => {
    const { result } = renderHook(() => useModal())

    act(() => {
      result.current.openModal()
    })
    expect(result.current.isModalOpen).toBe(true)
  })

  it('set isModalOpen to false if closeModal is fired', () => {
    const { result } = renderHook(() => useModal())

    act(() => {
      result.current.closeModal()
    })
    expect(result.current.isModalOpen).toBe(false)
  })

  it('toggle isModalOpen if toggleModalOpenStatus is fired', () => {
    const { result } = renderHook(() => useModal())

    act(() => {
      result.current.toggleModalOpenStatus()
    })
    expect(result.current.isModalOpen).toBe(true)
    act(() => {
      result.current.toggleModalOpenStatus()
    })
    expect(result.current.isModalOpen).toBe(false)
  })
})
