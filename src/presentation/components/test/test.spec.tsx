import React from 'react'
import { render, screen } from '@testing-library/react'
import Test from './testing'

describe('test', () => {
  it('it works', () => {
    render(<Test />)

    expect(screen.getByRole('heading', { name: /test/i })).toBeInTheDocument()
  })
})
