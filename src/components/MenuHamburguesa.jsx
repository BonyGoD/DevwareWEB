//React
import { useId, useState, useRef } from 'react'
import { NavLink } from "react-router-dom"

//Assets
import { MenuIcon } from '../utils/Icons.jsx'
import icon_esp from '../assets/iconos/iconos-idiomas/esp.png'
import icon_cat from '../assets/iconos/iconos-idiomas/cat.png'
import { CerrarButton } from '../utils/Icons.jsx'

//CSS
import './MenuHamburguesa.css'

//Multi-Language
import { TextosLinks } from '../globals/languages.js'
import { LanguageContext } from "../context/LanguageContext.jsx";
import { useContext } from "react";

export function MenuHamburguesa() {

    const checkBoxId = useId()
    const [isOpen, setIsOpen] = useState(true)
    const checkBoxRef = useRef(null)

    const handleClick = () => {
        setIsOpen(false)
        if (checkBoxRef.current) {
            checkBoxRef.current.checked = false
        }
    }

    const { currentLanguage, setLanguage } = useContext(LanguageContext);

    const changeLanguage = (e) => {
        setLanguage(e.currentTarget.id);
    };

    return (
        <>
        <label className='hamButton' htmlFor={checkBoxId} onClick={() => setIsOpen(true)}>
            <MenuIcon/>
        </label>
        <input ref={checkBoxRef} id={checkBoxId} type='checkBox' hidden />
        {isOpen && (
            <aside className='navegacion-hamb'>
                <label className='boton-x' onClick={handleClick}><CerrarButton/></label>
                <NavLink to='/' className='link'>{TextosLinks[currentLanguage].INICIO}</NavLink>
                <NavLink to='/nosotros' className='link'>{TextosLinks[currentLanguage].SOBRE_NOSOTROS}</NavLink>
                <NavLink to='/servicios' className='link'>{TextosLinks[currentLanguage].SERVICIOS}</NavLink>
                <NavLink to='/contacto' className='link'>{TextosLinks[currentLanguage].CONTACTO}</NavLink>
           <div className="container_icons_lang">
            <button id="ca" onClick={changeLanguage}>
              <img src={icon_cat} alt="icono catalan" height="20px" width="28px" />
            </button>
            <button id="es" onClick={changeLanguage}>
              <img src={icon_esp} alt="icono español" height="17px" width="28px" />
            </button>
          </div>
            </aside>
        )}
        </>
    )
}