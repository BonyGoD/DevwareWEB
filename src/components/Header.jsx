/* eslint-disable no-unused-vars */
//CSS
import './Header.css'

//Assets
import ITecnico from '../assets/imagenes/pagina-principal/imagen_principal_1280.webp'
import x from '../assets/iconos/iconos-redes/x.webp'
import instagram from '../assets/iconos/iconos-redes/instagram.webp'
import facebook from '../assets/iconos/iconos-redes/facebook.webp'

//Multi-Language
import { TextosHeader } from '../globals/languages.js'
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext.jsx";

export function HeaderDevWare() {

  const { currentLanguage } = useContext(LanguageContext);

  return (
    <main className='header'>
      <div className='contenido-header'>
        <h1 className='titulo-principal'>{TextosHeader[currentLanguage].TITULO}</h1>
        <p className='descripcion-header'>{TextosHeader[currentLanguage].DESCRIPCION}</p>
      </div>
      <div className='contenido-imagen-redes'>
        <img className='fondotecnico' src={ITecnico} alt='main-image' />

        <div className='contenido-botones'>
          <a href='https://x.com/devwareES' target="_blank">
            <img className='icon-socials' src={x} alt='image-X' />
          </a>

          <a href='https://www.instagram.com/devwarees/' target="_blank">
            <img className='icon-socials' src={instagram} alt='image-instagram' />
          </a>

          <a href='https://www.facebook.com/people/DevWare/61559771559745/' target="_blank">
            <img className='icon-socials' src={facebook} alt='image-facebook' />
          </a>
        </div>
      </div>
    </main>
  )
}
