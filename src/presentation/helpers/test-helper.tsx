import { render, RenderOptions, RenderResult } from '@testing-library/react'
import React, { ReactElement } from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'

const getProviders: React.FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
): RenderResult => {
  return render(ui, {
    wrapper: getProviders,
    ...options
  })
}

export * from '@testing-library/react'
export { customRender as render }
