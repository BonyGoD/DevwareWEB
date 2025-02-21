//CSS
import './Contacto.css'

//Componentes
import { HeaderComun } from '../components/HeaderComun.jsx'
import { Formulario } from '../components/Formulario.jsx'
import { Navegacion } from '../components/Navegacion.jsx'

//Assets
import FondoContacto from '../assets/imagenes/headers/FondoHeaderContacto.webp'

export function Contacto() {
  return (
    <>
      <main className='fondo-contacto'>
        <Navegacion isCustomColor={true} />
        <HeaderComun imagen={FondoContacto} />
        <Formulario />
      </main>
    </>
  )
}
