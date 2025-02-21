//CSS
import './Card.css'

//Funciones
import { renderIcon } from '../utils/functions.jsx'

//Multi-Language
import CardsJSON from '../globals/cardsTextos.json'
import { TextosCards } from '../globals/languages.js'
import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext.jsx'

export function Card() {
  const { currentLanguage } = useContext(LanguageContext)
  return (
    <>
      <div>
        <h2 className="titulo-informacion-cards">
          {TextosCards[currentLanguage].TITULO_CARDS}
        </h2>
      </div>
      <section className="contenido-informacion-cards">
        {CardsJSON.map((card) => (
          <div className="card" key={card[currentLanguage].id}>
            <label className="icono-bullet">{renderIcon(card[currentLanguage].id)}</label>
            <h2 className="titulo-bullet">{card[currentLanguage].titulo}</h2>
            <p className="descripcion-bullet">{card[currentLanguage].descripcion}</p>
          </div>
        ))}
      </section>
    </>
  )
}

