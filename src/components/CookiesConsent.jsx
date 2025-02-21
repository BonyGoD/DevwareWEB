//CSS
import './CookiesConsent.css'

//React
import { useState, useEffect } from 'react'

//Librerias
import Cookies from 'js-cookie'

//Componentes
import { CustomDialog } from './CustomDialog.jsx'

const CookiesConsent = () => {
  const [hidePopupCookies, setHidePopupCookies] = useState(false)
  const [isPoliticaPrivacidad, setIsPoliticaPrivacidad] = useState(false)

  useEffect(() => {
    const cookiesAccepted = Cookies.get('acceptedCookies')
    if (cookiesAccepted === 'true') {
      setHidePopupCookies(true)
    }
  }, [])

  const handleAcceptCookies = () => {
    Cookies.set('acceptedCookies', 'true', { expires: 365 })
    setHidePopupCookies(true)
  }

  const handleRejectCookies = () => {
    Cookies.set('acceptedCookies', 'false', { expires: 365 })
    setHidePopupCookies(true)
  }

  if (hidePopupCookies) {
    return null
  }

  return (
    <div className="cookie-consent">
      <div className="cookie-content">
        <p>
          Este sitio web utiliza cookies para mejorar su experiencia. Las
          cookies son pequeños archivos de texto que se almacenan en tu
          dispositivo para recordar tus preferencias y mejorar la funcionalidad
          del sitio.
        </p>
        <p>
            Al hacer clic en {'"Aceptar"'}, aceptas el uso de cookies de acuerdo con
            nuestra política de cookies. Si prefieres no aceptar las cookies o
            quieres obtener más información, puedes hacer clic en {'"Rechazar"'} o
            consultar nuestra <a href='#' className='cookie-policy-link ' onClick={(e) => { e.preventDefault(); setIsPoliticaPrivacidad(true); }}>política</a> de cookies para obtener más detalles sobre
            cómo utilizamos las cookies y cómo puedes controlarlas.
        </p>
        <div className="cookie-buttons">
          <button className="accept-button" onClick={handleAcceptCookies}>
            Aceptar
          </button>
          <button className="reject-button" onClick={handleRejectCookies}>
            Rechazar
          </button>
        </div>
      </div>
      {isPoliticaPrivacidad ? (
            <CustomDialog isPoliticaPrivacidad={isPoliticaPrivacidad} open={isPoliticaPrivacidad} onClose={() => {
                setIsPoliticaPrivacidad(false);
              }}/>
        ) : null
      }
    </div>
  )
}

export default CookiesConsent
