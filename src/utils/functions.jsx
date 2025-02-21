//Assets
import AndroidIcon from '../assets/iconos/tecnologias/AndroidIcon.webp'
import Css3Icon from '../assets/iconos/tecnologias/Css3Icon.webp'
import Html5Icon from '../assets/iconos/tecnologias/Html5Icon.webp'
import JavascriptIcon from '../assets/iconos/tecnologias/JavascriptIcon.webp'
import ReactIcon from '../assets/iconos/tecnologias/ReactBig.webp'
import ReactNativeIcon from '../assets/iconos/tecnologias/ReactNativeBig.webp'
import AwsIcon from '../assets/iconos/tecnologias/AWSBig.webp'
import NodeJsIcon from '../assets/iconos/tecnologias/NodeJS.webp'
import MongoDbIcon from '../assets/iconos/tecnologias/Mongo.webp'
import NextJsIcon from '../assets/iconos/tecnologias/NextJS.webp'
import SqlIcon from '../assets/iconos/tecnologias/SQL.webp'
import TypeScriptIcon from '../assets/iconos/tecnologias/TypeScript.webp'
import WordPressIcon from '../assets/iconos/tecnologias/WordPressBig.webp'
import Azure from '../assets/iconos/tecnologias/AzureBig.webp'
import {
  BombillaIcon,
  DispositivosIcon,
  GraficoIcon,
  SoporteTecnicoIcon,
  ExpUsuario,
  SolucionesIcon,
} from './Icons.jsx'
import { VITE_API_MAIL } from '../../config.js'
import { CardId, IconosTecnologiaId } from './constantes.jsx'
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext.jsx";
import { literals } from '../globals/languages.js'

export function useLanguage() {
  const { currentLanguage } = useContext(LanguageContext)
  return currentLanguage
}
export function renderIcon(id) {
  switch (id) {
    case CardId.SOLUCIONES:
      return <SolucionesIcon />
    case CardId.BOMBILLA:
      return <BombillaIcon />
    case CardId.EXPEPRIENCIA_USUARIO:
      return <ExpUsuario />
    case CardId.DISPOSITIVOS:
      return <DispositivosIcon />
    case CardId.GRAFICO:
      return <GraficoIcon />
    case CardId.SOPORTE_TECNICO:
      return <SoporteTecnicoIcon />
    default:
      return <SolucionesIcon />
  }
}

export function renderIconTecnologias(id) {
  switch (id) {
    case IconosTecnologiaId.REACT:
      return ReactIcon
    case IconosTecnologiaId.JAVASCRIPT:
      return JavascriptIcon
    case IconosTecnologiaId.HTML5:
      return Html5Icon
    case IconosTecnologiaId.CSS3:
      return Css3Icon
    case IconosTecnologiaId.ANDROID:
      return AndroidIcon
    case IconosTecnologiaId.REACTNATIVE:
      return ReactNativeIcon
    case IconosTecnologiaId.AWS:
      return AwsIcon
    case IconosTecnologiaId.NODEJS:
      return NodeJsIcon
    case IconosTecnologiaId.MONGODB:
      return MongoDbIcon
    case IconosTecnologiaId.NEXTJS:
      return NextJsIcon
    case IconosTecnologiaId.SQL:
      return SqlIcon
    case IconosTecnologiaId.TYPESCRIPT:
      return TypeScriptIcon
    case IconosTecnologiaId.WORDPRESS:
      return WordPressIcon
    case IconosTecnologiaId.AZURE:
      return Azure
    default:
      return AndroidIcon
  }
}
export function renderTextTecnologias(id) {
  switch (id) {
    case IconosTecnologiaId.REACT:
      return 'React'
    case IconosTecnologiaId.JAVASCRIPT:
      return 'JavaScript'
    case IconosTecnologiaId.HTML5:
      return 'Html5'
    case IconosTecnologiaId.CSS3:
      return 'CSS3'
    case IconosTecnologiaId.ANDROID:
      return 'Android'
    case IconosTecnologiaId.REACTNATIVE:
      return 'React Native'
    case IconosTecnologiaId.AWS:
      return 'AWS'
    case IconosTecnologiaId.NODEJS:
      return 'NodeJS'
    case IconosTecnologiaId.MONGODB:
      return 'Mongo DB'
    case IconosTecnologiaId.NEXTJS:
      return 'NextJS'
    case IconosTecnologiaId.SQL:
      return 'SQL'
    case IconosTecnologiaId.TYPESCRIPT:
      return 'TypeScript'
    case IconosTecnologiaId.WORDPRESS:
      return 'WordPress'
    case IconosTecnologiaId.AZURE:
      return 'Microsoft Azure'

    default:
      return 'Android'
  }
}

export const handleLogoClick = () => {
  window.scrollTo(0, 0)
}

export async function enviarMail({ formValues }) {
  try {
    console.log(formValues)
    const response = await fetch(VITE_API_MAIL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formValues),
    })
    if (response.ok) {
      return response.ok
    }
  } catch (error) {
    alert(literals[useLanguage].ENVIO_ERROR)
    console.error(literals[useLanguage].ENVIO_ERROR, error)
  }
}
