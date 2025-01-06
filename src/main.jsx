import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/home/home.jsx'
import Login from './pages/login/Login.jsx'
import Admin from './pages/admin/Admin.jsx'

import  InicioUsuario  from './pages/incioUsuario/inicioUsuario.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Home></Home> */}
    {/* <Login></Login> */}
    <Admin></Admin>
    <InicioUsuario></InicioUsuario>

  </StrictMode>,
)
