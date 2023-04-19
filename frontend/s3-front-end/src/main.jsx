import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './FileDrop'
import FileDrop from './FileDrop'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <FileDrop />
  </React.StrictMode>,
)
