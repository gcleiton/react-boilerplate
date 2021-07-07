import React from 'react'
import { screen, render } from '@testing-library/react'
import Home from './home'

render(<Home />)

describe('Home Page', () => {
  test('Should render the heading', () => {
    expect(
      screen.getByRole('heading', { name: /react boilerplate/i })
    ).toBeInTheDocument()
  })
})
