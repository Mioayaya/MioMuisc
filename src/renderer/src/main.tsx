import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import '@arco-design/web-react/dist/css/arco.css'

import './assets/main.css'
import App from './App'
import store from './store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.Suspense>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.Suspense>
)
