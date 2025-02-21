//CSS
import './Clientes.css'

//Multi-Language
import { LanguageContext } from '../context/LanguageContext.jsx'
import { literals } from '../globals/languages'
import { useContext, useState, useEffect } from 'react'

//Assets
import logoGrifolls_white from '../assets/imagenes/pagina-principal/logoGrifolls_white.webp'
import logoGrifolls_black from '../assets/imagenes/pagina-principal/logoGrifolls_black.webp'

export function Clientes() {
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)')
  const { currentLanguage } = useContext(LanguageContext)
  const [themePrefer, setThemePrefer] = useState(prefersDarkScheme.matches)

  useEffect(() => {
    const handler = (e) => setThemePrefer(e.matches)
    prefersDarkScheme.addEventListener('change', handler)
    return () => prefersDarkScheme.removeEventListener('change', handler)
  }, [prefersDarkScheme])

  return (
    <div className="contenedor-clientes">
      <h1 className="titulo-clientes">
        {literals[currentLanguage].TITULO_CLIENTES}
      </h1>
      <a href="https://www.grifolls.es" target="_blank">
        <img
          className='imagen-grifolls'
          src={themePrefer ? logoGrifolls_white : logoGrifolls_black}
          alt="Imagen cliente"
        />
      </a>
    </div>
  )
}
