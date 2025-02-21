//React
import { Link } from 'react-router-dom'

//CSS
import './Logo.css'
import 'normalize.css'

//Assets
import DW_TG from '../assets/imagenes/pagina-principal/Logo.webp'

export function Logo() {
  return (
    <div className="logo-contenedor">
      <Link to='/'>
        <img src={DW_TG} className="logo" alt='DevWare Logo'></img>
      </Link>
      <h1>DevWare</h1>
    </div>
  )
}
