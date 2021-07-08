import React from 'react'
import { screen } from '@testing-library/react'
import Home from './home'
import { render } from '@/presentation/helpers/test-helper'

render(<Home />)

describe('Home Page', () => {
  test('Should render the heading', () => {
    expect(
      screen.getByRole('heading', { name: /react boilerplate/i })
    ).toBeInTheDocument()
  })
})
