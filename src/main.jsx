import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Layout from './Component/Layout.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
      <App />
      {/* <Layout/> */}

  </StrictMode>
)