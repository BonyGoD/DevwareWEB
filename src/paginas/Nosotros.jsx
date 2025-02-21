//CSS
import './Nosotros.css'

//Componentes
import { Navegacion } from '../components/Navegacion.jsx'
import { HeaderComun } from '../components/HeaderComun.jsx'
import { SlideContacto } from '../components/SlideContacto.jsx'

//Assets
import FondoNosotros from '../assets/imagenes/headers/FondoHeaderNosotros.webp'

//Multi-Language
import { TextosNosotros, TextosLinks, idTituloContactoNosotros, idDescripcionContactoNosotros } from '../globals/languages.js'
import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext.jsx'

export function Nosotros() {

  const { currentLanguage } = useContext(LanguageContext)

  return (
    <>
      <main className="fondo-nosotros">
        <Navegacion isCustomColor={true} />
        <HeaderComun imagen={FondoNosotros} />
          <h1 className="sobreNosotros-titulo">{TextosLinks[currentLanguage].SOBRE_NOSOTROS}</h1>
          <div className='contenedor-texto-principal'>
            {TextosNosotros.map((parrafo) => (
              <p key={parrafo[currentLanguage].id} className="texto-principal">{parrafo[currentLanguage].PARRAFO}</p>
            ))}
          </div>
          <SlideContacto titulo={idTituloContactoNosotros} descripcion={idDescripcionContactoNosotros} />
      </main>
    </>
  )
}
