import '../src/index.css'
import yourTheme from './myTheme'
import { MemoryRouter } from 'react-router'
import { Provider } from 'react-redux'
import { store } from '../src/store/index.ts'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: yourTheme,
  },
}

export const decorators = [
  (Story) => (
    <Provider store={store}>
      <MemoryRouter initialEntries={['/']}>
        <Story />
      </MemoryRouter>
    </Provider>
  ),
]
