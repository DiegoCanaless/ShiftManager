import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/home/home.jsx'
import Login from './pages/login/Login.jsx'
import Admin from './pages/admin/Admin.jsx'
import SuperAdmin from "./pages/superAdmin/superAdmin.jsx"
import Secretario from "./pages/secretario/secretario.jsx"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Home></Home> */}
    {/* <Login></Login> */}
    {/* <Admin></Admin> */}
    {/* <SuperAdmin/> */}
    <Secretario/>
  </StrictMode>,
)
