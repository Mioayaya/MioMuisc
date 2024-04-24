import './assets/main.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
// import { Provider } from 'react-redux'
import '@arco-design/web-react/dist/css/arco.css'
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.Suspense>
    <Router>
      <App />
    </Router>
  </React.Suspense>
)
