import React from 'react'
import ReactDOM from 'react-dom'
import * as Sentry from '@sentry/react'
import { Integrations } from '@sentry/tracing'
import './index.css'
import App from './App'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import { store } from './store'

Sentry.init({
  dsn:
    'https://71befa8177db4fb59d336aef7823105a@o927079.ingest.sentry.io/6077936',
  integrations: [new Integrations.BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
})

ReactDOM.render(
  <React.StrictMode>
    <Sentry.ErrorBoundary
      showDialog
      fallback={
        <div className='flex h-screen bg-gray-100'>
          <div className='max-w-lg p-8 m-auto border border-white rounded-lg shadow-lg bg-gray-50'>
            <h1 className='text-3xl font-semibold'>We are sorry ;(</h1>
            <p className='mt-4 text-lg'>Something went wrong on our end.</p>
            <a href='/' className='font-bold text-blue-600'>
              Go to home page
            </a>
            .
          </div>
        </div>
      }
    >
      <Provider store={store}>
        <App />
      </Provider>
    </Sentry.ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
