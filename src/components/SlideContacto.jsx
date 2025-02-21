/* eslint-disable react/prop-types */
//CSS
import './SlideContacto.css'

//React
import { Link } from 'react-router-dom';

//Multi-lenguaje
import { literals } from '../globals/languages';
import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

export function SlideContacto({ titulo, descripcion }) {
  const { currentLanguage } = useContext(LanguageContext)
  return (
    <div className='contenedor-contacto revealing-image'>
      <div className='contenido-contacto'>
        <h1 className='titulo-contacto'>{literals[currentLanguage][titulo]}</h1>
        <p className='descripcion-contacto'>{literals[currentLanguage][descripcion]}</p>
        <Link to='/contacto' className='boton-contacto'>{literals[currentLanguage].CONTACTANOS}</Link>
      </div>
    </div>
  )
}