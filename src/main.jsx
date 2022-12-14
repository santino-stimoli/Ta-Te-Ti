import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import AppRouting from './routes/appRouting'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppRouting />
  </BrowserRouter>
)