//CSS
import './SlideTecnologias.css'

//Funciones
import { renderIconTecnologias, renderTextTecnologias } from '../utils/functions.jsx'

//Assets
import { IconosTecnologiaId } from '../utils/constantes.jsx'

//Multi-Language
import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext.jsx'
import { literals } from '../globals/languages.js'

export function SlideTecnologias() {
    const { currentLanguage } = useContext(LanguageContext)
        return (
            <section className='contenedor-tecnologias'>
                <div className='contenido-tecnologias'>
                    <h1 className='titulo-tecnologia'>{literals[currentLanguage].TITULO_TECNOLOGIAS}</h1>
                    <p className='descripcion-tecnologia'>{literals[currentLanguage].DESCRIPCION_TECNOLOGIAS}</p>
                    <div className='contenedor-iconos-general'>
                    {Object.values(IconosTecnologiaId).map(id => (
                        <div key={id} className='contenedor-icono-texto'>
                        <img className='iconos-tecnologia' key={id} src={renderIconTecnologias(id)} alt={id}/>
                        <p className='texto-iconos'>{renderTextTecnologias(id)}</p>
                        </div>
                    ))}
                    </div>
                </div>
            </section>
        )

}