import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Routes from './routes/routes'
import "./config/i18next.config.js";
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Routes />
  </StrictMode>,
)
