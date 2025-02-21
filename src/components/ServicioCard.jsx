/* eslint-disable react/prop-types */
//CSS
import './ServicioCard.css'

//Componentes
import { ParrafoPersonalizado } from './ParrafoPersonalizado.jsx'

export function ServicioCard({ titulo, imagen, descripcion, reverse, isLast }) {
  return (
    <>
      {reverse ? (
        <div className="contenedor-imagen-parrafo imagen-primero">
          <div className='separador'></div>
          <img
            className="imagen-servicios"
            src={imagen}
            alt="Imagen Servicio"
          />
          <div className="titulo-descripcion">
            <h2 className="titulo">{titulo}</h2>
            <ParrafoPersonalizado ServicioId={descripcion} />
          </div>
        </div>
      ) : (
        <div className="contenedor-imagen-parrafo">
          <div className="titulo-descripcion">
            <h2 className="titulo">{titulo}</h2>
            <ParrafoPersonalizado ServicioId={descripcion} />
          </div>
          <img
            className="imagen-servicios"
            src={imagen}
            alt="Imagen Servicio"
          />
          {!isLast
           ? <div className='separador'></div>
           : null}
        </div>
      )}
    </>
  )
}
