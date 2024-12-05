import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NavBarIndex from './components/navbarIndex/navbarIndex'
import Footer from './components/footer/footer'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Footer></Footer>
  </StrictMode>,
)
