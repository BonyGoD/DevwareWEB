//React
import React from 'react'
import { useState, useMemo, useRef } from 'react'

//Librerias
import { Checkbox, Input } from '@nextui-org/react'
import { Button } from '@nextui-org/button'
import { Textarea } from '@nextui-org/react'
import confetti from 'canvas-confetti'

//CSS
import './Formulario.css'

//Funciones
import { enviarMail } from '../utils/functions.jsx'

//Componentes
import { CustomDialog } from './CustomDialog.jsx'

//Assets
import { AvionPapel } from '../utils/Icons.jsx'

//Multi-Language
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext.jsx";
import { literals } from '../globals/languages.js'

export function Formulario() {
  const [valueEmail, setValueEmail] = useState('email@email.com')
  const nombreRef = useRef()
  const emailRef = useRef()
  const descripcionRef = useRef()
  const [returnOK, setReturnOK] = useState(false)
  const [isPoliticaPrivacidad, setIsPoliticaPrivacidad] = useState(false)
  const [isSelected, setIsSelected] = React.useState(false);

  const { currentLanguage } = useContext(LanguageContext)

  const validateEmail = (valueEmail) =>
    valueEmail.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)

  const isInvalid = useMemo(() => {
    if (valueEmail === '') return false

    return validateEmail(valueEmail) ? false : true
  }, [valueEmail])

  const [invalid, setInvalid] = useState({
    nombre: false,
    email: false,
    descripcion: false,
  })

  const [formValues, setFormValues] = useState({
    nombre: '',
    email: '',
    telefono: '',
    descripcion: '',
    nombreEmpresa: 'DevWare',
    mailEmpresa: 'info@devware.es',
  })

  const handleChange = (e) => {
    if (e.target.name === 'telefono') {
      const re = /^[0-9\b]+$/
      if (e.target.value === '' || re.test(e.target.value)) {
        setFormValues({
          ...formValues,
          [e.target.name]: e.target.value,
        })
      }
    } else {
      setFormValues({
        ...formValues,
        [e.target.name]: e.target.value,
      })
      if (e.target.value === '') {
        setInvalid((prevState) => ({ ...prevState, [e.target.name]: true })) // Si el valor es vacío, establece invalid en true
      } else {
        setInvalid((prevState) => ({ ...prevState, [e.target.name]: false })) // Si el valor no es vacío, establece invalid en false
      }
    }
  }

   const enviarDatos = async () => {
    let response = false
    switch (true) {
      case formValues.nombre === '':
        nombreRef.current.focus()
        setInvalid((prevState) => ({ ...prevState, nombre: true }))
        break
      case formValues.email === '':
        emailRef.current.focus()
        setInvalid((prevState) => ({ ...prevState, email: true }))
        break
      case formValues.descripcion === '':
        descripcionRef.current.focus()
        setInvalid((prevState) => ({ ...prevState, descripcion: true }))
        break
      default:
        response = await enviarMail({ formValues })
        if (response) {
          confetti()
          setReturnOK(true)
          setIsSelected(false)
          formValues.nombre = ''
          formValues.email = ''
          formValues.telefono = ''
          formValues.descripcion = ''
        } else {
          alert(literals[currentLanguage].ENVIO_ERROR)
          setReturnOK(false)
        }
        break
    }
  }

  return (
    <div className="contenido-contacto-formulario">
      <form className="formulario">
        <div className="contenedor-imagen-inputs">
          <div className="inputs">
            <Input
              classNames={{
                label: ['text-black'],
                inputWrapper: ['bg-default-200/50']
              }}
              className="input-data"
              ref={nombreRef}
              type="text"
              key="nombre"
              name="nombre"
              label={literals[currentLanguage].NOMBRE_FORM}
              color={invalid.nombre ? 'danger' : ''}
              errorMessage={invalid.nombre && literals[currentLanguage].ERROR_NOMBRE}
              variant="bordered"
              value={formValues.nombre}
              onChange={handleChange}
            />
            <Input
              classNames={{
                label: ['text-black'],
                inputWrapper: ['bg-default-200/50'],
              }}
              className="input-data"
              type="text"
              key="telefono"
              name="telefono"
              label={literals[currentLanguage].TELEFONO_FORM}
              variant="bordered"
              color=''
              value={formValues.telefono}
              onChange={handleChange}
              pattern="[0-9]{9}"
              maxLength="9"
            />
          </div>
          <div className="contenedor-imagen">
            <AvionPapel className="imagen-contacto" />
          </div>
        </div>
        <Input
          classNames={{
            label: ['text-black'],
            inputWrapper: ['bg-default-200/50'],
          }}
          ref={emailRef}
          className="input-data"
          type="email"
          key="email"
          name="email"
          label={literals[currentLanguage].EMAIL_FORM}
          color={isInvalid || invalid.email ? 'danger' : ''}
          errorMessage={isInvalid || (invalid.email && literals[currentLanguage].ERROR_EMAIL)}
          onValueChange={setValueEmail}
          variant="bordered"
          value={formValues.email}
          onChange={handleChange}
        />
        <Textarea
          classNames={{
            label: ['text-black', 'text-lg'],
            inputWrapper: ['bg-default-200/50']
          }}
          className="text-area-data"
          ref={descripcionRef}
          key="descripcion"
          name="descripcion"
          label={literals[currentLanguage].DESCRIPCION_FORM}
          color={invalid.descripcion ? 'danger' : ''}
          errorMessage={invalid.descripcion && literals[currentLanguage].ERROR_DESCRIPCION}
          variant="bordered"
          placeholder={literals[currentLanguage].SUBDESCRIPCION_FORM}
          value={formValues.descripcion}
          onChange={handleChange}
        />
        <div className='checkbox-parrafo'>
          <Checkbox isSelected={isSelected} onValueChange={setIsSelected}/>
          <p>
            {literals[currentLanguage].PARRAFO_PRIVACIDAD1}<strong><a href='#' onClick={(e) => { e.preventDefault(); setIsPoliticaPrivacidad(true); setReturnOK(true); }}>{literals[currentLanguage].PARRAFO_PRIVACIDAD_STRONG}</a></strong>
          </p>
        </div>
        {returnOK || isPoliticaPrivacidad ? (
          <CustomDialog isPoliticaPrivacidad={isPoliticaPrivacidad} open={returnOK} onClose={() => {
            if(!isSelected && isPoliticaPrivacidad) {
              setIsSelected(true);
            }
            setIsPoliticaPrivacidad(false);
            setReturnOK(false);
          }}/>
        ) : null}
        <div className="boton-enviar">
          <Button isDisabled={!isSelected} onClick={enviarDatos} size="lg" color="primary">
            Enviar
          </Button>
        </div>
      </form>
      <div className="contenedor-descripcion">
        <h1 className="titulo-slide-right">{literals[currentLanguage].TITULO_SMALL_CONTACTO}</h1>
        <h2 className="descripcion-slide-right">
          {literals[currentLanguage].TITULO_CONTACTO}
        </h2>
        <p className="parrafo-contacto">
          {literals[currentLanguage].DESCRIPCION_CONTACTO1}
          <strong>
            {literals[currentLanguage].DESCRIPCION_CONTACTO_STRONG}
          </strong>
          {literals[currentLanguage].DESCRIPCION_CONTACTO2}
        </p>
      </div>
    </div>
  )
}
