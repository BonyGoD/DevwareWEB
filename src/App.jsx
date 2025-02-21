/* eslint-disable react/prop-types */
//CSS
import './App.css'
import 'normalize.css'

//Componentes
import { HeaderDevWare } from './components/Header.jsx'
import { Card } from './components/Card.jsx'
import { SlideContacto } from './components/SlideContacto.jsx'
import { SlideTecnologias } from './components/SlideTecnologias.jsx'
import { Footer } from './components/Footer.jsx'
import { Navegacion } from './components/Navegacion.jsx'
import { Clientes } from './components/Clientes.jsx'

//Rutas
import { RoutersApp } from './utils/RoutersApp.jsx'

//React
import { BrowserRouter, Route, Routes } from 'react-router-dom'

//Multi-lenguaje
import { idTituloAyuda, idDescripcionAyuda } from './globals/languages.js'
import {
  LanguageProvider,
  LanguageContext,
} from './context/LanguageContext.jsx'
import { systemLanguage } from './globals/constants.js'

//Cookies
import CookiesConsent from './components/CookiesConsent.jsx'
import { useContext, useEffect } from 'react'

function App() {
  return (
    <main>
      <LanguageProvider>
        <LanguageSetter systemLanguage={systemLanguage} />
        <BrowserRouter>
          <Routes>
            {RoutersApp()}
            <Route
              path="/"
              element={
                <main>
                  <section className="contenedor-header">
                    <Navegacion isCustomColor={false} />
                    <HeaderDevWare />
                  </section>
                  <Card />
                  <SlideTecnologias />
                  <SlideContacto
                    titulo={idTituloAyuda}
                    descripcion={idDescripcionAyuda}
                  />
                  <Clientes />
                </main>
              }
            />
          </Routes>
          <CookiesConsent />
          <Footer />
        </BrowserRouter>
      </LanguageProvider>
    </main>
  )
}

function LanguageSetter({ systemLanguage }) {
  const { setLanguage } = useContext(LanguageContext)

  useEffect(() => {
    setLanguage(systemLanguage())
  }, [])

  return null
}

export default App
