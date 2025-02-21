/* eslint-disable react/prop-types */
//CSS
import './HeaderComun.css'

export function HeaderComun({imagen}) {

  return (
    <header className="contenedor-header-comun">
      <img className="imagen-fondo" src={imagen} alt="Imagen Header" />
    </header>
  )
}