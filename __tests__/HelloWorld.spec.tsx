import { render, screen } from '@testing-library/react'

import HelloWorld from '../src/components/HelloWorld/HelloWorld'

it('renders hello world', () => {
  render(<HelloWorld msg={'example'} />)
  expect(screen.getByText('Current Count: 10')).toBeInTheDocument()
})
