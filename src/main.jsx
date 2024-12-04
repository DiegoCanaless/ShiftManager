import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NavBarIndex from './components/navbarIndex/navbarIndex'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBarIndex></NavBarIndex>
  </StrictMode>,
)
