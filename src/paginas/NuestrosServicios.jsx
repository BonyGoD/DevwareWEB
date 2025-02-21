/* eslint-disable no-unused-vars */
//CSS
import './NuestrosServicios.css'

//Componentes
import { Navegacion } from '../components/Navegacion.jsx'
import { HeaderComun } from '../components/HeaderComun.jsx'
import { ServicioCard } from '../components/ServicioCard.jsx'

//Assets
import FondoServicios from '../assets/imagenes/headers/FondoHeaderServicios.webp'

//Multi-Language
import { NuestrosServicios } from '../globals/languages.js'
import { literals } from '../globals/languages.js'
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext.jsx";

export function Servicios() {

  const { currentLanguage } = useContext(LanguageContext);
  
  return (
    <>
      <Navegacion isCustomColor={true} />
      <HeaderComun imagen={FondoServicios} />
      <div className="nuestros-servicios">
        <h1 className="titulo-general">{literals[currentLanguage].NUESTROS_SERVICIOS}</h1>
        <article className="article-servcicios">
        {NuestrosServicios.map((servicio, index) => (
          <ServicioCard
          key={servicio[currentLanguage].id} 
          titulo={servicio[currentLanguage].titulo} 
          imagen={servicio[currentLanguage].imagen} 
          descripcion={servicio[currentLanguage].descripcion} 
          reverse={servicio[currentLanguage].id % 2 === 0 ? false : true}
          isLast={index === NuestrosServicios.length -1} />
        ))}
        </article>
      </div>
    </>
  )
}
