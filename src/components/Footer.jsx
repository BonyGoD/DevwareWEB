/* eslint-disable no-unused-vars */
//React
import { NavLink } from 'react-router-dom'

//CSS
import '../components/Footer.css'

//Assets
import Logo from '../assets/imagenes/pagina-principal/Logo.webp'
import x from '../assets/iconos/iconos-redes/x.webp'
import instagram from '../assets/iconos/iconos-redes/instagram.webp'
import facebook from '../assets/iconos/iconos-redes/facebook.webp'

//Funciones
import { handleLogoClick } from '../utils/functions.jsx'

//Multi-Language
import { TextosLinks } from '../globals/languages.js'
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext.jsx";
import { literals } from '../globals/languages.js'


export function Footer() {

    const { currentLanguage } = useContext(LanguageContext);

    return (
        <footer className="contenedor-footer">
            <div className='contenedor-logoDescripcion'>
                <NavLink to='/' onClick={handleLogoClick}>
                    <img className='logo-devware-footer' src={Logo} alt="Logo DevWare" />
                </NavLink>
                <p className='descripciones-footer'>{literals[currentLanguage].DESCRIPCION_FOOTER}</p>
                <h2 className='titulos-footer'>{literals[currentLanguage].SIGUENOS}</h2>
                <div className='redes-sociales'>
                    <a className='links-redes' href='https://x.com/devwareES' target="_blank">
                        <img className='icon-socials' src={x} alt='image-X' />
                    </a>

                    <a className='links-redes' href='https://www.instagram.com/devwarees/' target="_blank">
                        <img className='icon-socials' src={instagram} alt='image-instagram' />
                    </a>

                    <a className='links-redes' href='https://www.facebook.com/people/DevWare/61559771559745/' target="_blank">
                        <img className='icon-socials' src={facebook} alt='image-facebook' />
                    </a>
                </div>
            </div>
            <div className='contenedor-servicios'>
                <h2 className='titulos-footer'>{literals[currentLanguage].SERVICIOS}</h2>
                <ul>
                    <li className='lista-servicios'>
                    <NavLink to='/servicios' onClick={handleLogoClick} className='links-servicios'>{literals[currentLanguage].LINK_SERVICIOS_SOLUCIONES}</NavLink>
                    <NavLink to='/servicios' onClick={handleLogoClick} className='links-servicios'>{literals[currentLanguage].LINK_SERVICIOS_INNOVACION}</NavLink>
                    <NavLink to='/servicios' onClick={handleLogoClick} className='links-servicios'>{literals[currentLanguage].LINK_SERVICIOS_EXPERIENCIA_USUARIO}</NavLink>
                    <NavLink to='/servicios' onClick={handleLogoClick} className='links-servicios'>{literals[currentLanguage].LINK_SERVICIOS_INTEGRACION}</NavLink>
                    <NavLink to='/servicios' onClick={handleLogoClick} className='links-servicios'>{literals[currentLanguage].LINK_SERVICIOS_ESCALABILIDAD}</NavLink>
                    <NavLink to='/servicios' onClick={handleLogoClick} className='links-servicios'>{literals[currentLanguage].LINK_SERVICIOS_SOPORTE_TECNICO}</NavLink>
                    </li>
                </ul>
            </div>
            <div className='contenedor-contacto-footer'>
                <h2 className='titulos-footer'>{TextosLinks[currentLanguage].CONTACTO}</h2>
                <div className='contenido-email'>
                    <label htmlFor=""></label>
                    <p className='descripciones-footer'>{literals[currentLanguage].MAIL_DEVWARE}</p>
                </div>
            </div>
            <p className='derechos-reservados'>{literals[currentLanguage].DERECHOS_RESERVADOS}</p>
        </footer>
    )
}