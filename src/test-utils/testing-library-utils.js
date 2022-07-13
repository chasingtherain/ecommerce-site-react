import React from 'react'
import {render} from '@testing-library/react'
import { ThemeContextProvider } from "../contexts/ThemeContext";
import { AuthContextProvider } from "../contexts/AuthContext";

const AllTheProviders = ({children}) => {
  return (
    <ThemeContextProvider>
        <AuthContextProvider>
            {children}
        </AuthContextProvider>
    </ThemeContextProvider>
  )
}

const renderWithContext = (ui, options) =>
  render(ui, {wrapper: AllTheProviders, ...options})

// re-export everything
export * from '@testing-library/react'

// override render method
export {renderWithContext as render}