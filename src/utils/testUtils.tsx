import { ReactElement } from 'react'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import { RootState, store as actualStore, useAppDispatch } from '../store'
import { EnhancedStore } from '@reduxjs/toolkit'

export const renderWithProviders = (
  children: ReactElement,
  store: EnhancedStore<RootState> = actualStore,
  options = {}
) =>
  render(
    <BrowserRouter>
      <Provider store={store}>{children}</Provider>
    </BrowserRouter>
  )

export const getDispatch = () => {
  const dispatch = useAppDispatch()
  return dispatch
}
