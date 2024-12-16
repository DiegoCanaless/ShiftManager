import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/home/home.jsx'
import Login from './pages/login/Login.jsx'
import Admin from './pages/admin/Admin.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Home></Home> */}
    {/* <Login></Login> */}
    <Admin></Admin>
  </StrictMode>,
)
