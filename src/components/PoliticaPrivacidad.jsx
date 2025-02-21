//CSS
import './PoliticaPrivacidad.css'

export function PoliticaPrivacidad() {
  return (
    <main className="main-privacidad">
      <p>Última actualización: 26-04-2024</p>
      <p className='primer-parrafo'>
        En <strong>DevWare</strong>, entendemos y valoramos la importancia de
        proteger su privacidad cuando utiliza nuestros servicios en línea. Esta
        Política de Privacidad describe cómo recopilamos, usamos y protegemos la
        información que usted nos proporciona a través de nuestro formulario
        web.
      </p>
      <ol className="numeros-articulo primero-solo">
        <li>
          <strong>Información que recopilamos:</strong>
          <ul className="puntos-articulo">
            <li>
              <strong>Nombre: </strong>Almacenamos su nombre para poder
              dirigirnos a usted de manera adecuada y personalizada.
            </li>
            <li>
              <strong>Teléfono: </strong>Recopilamos su número de teléfono para
              poder contactarlo en relación con su consulta o solicitud.
            </li>
            <li>
              <strong>Correo electrónico: </strong>Guardamos su dirección de
              correo electrónico para poder responder a su consulta y mantenerlo
              informado sobre nuestros productos, servicios y promociones,
              siempre y cuando usted haya dado su consentimiento explícito.
            </li>
          </ul>
        </li>
        <li>
          <strong>Uso de la información:</strong>
          <ul className="puntos-articulo">
            <li>Responder a sus consultas, solicitudes o comentarios.</li>
            <li>
              Proporcionarle información sobre nuestros productos, servicios y
              promociones, siempre y cuando haya dado su consentimiento para
              recibir comunicaciones de marketing.
            </li>
            <li>Mejorar nuestros productos y servicios.</li>
            <li>Cumplir con requisitos legales y regulatorios.</li>
          </ul>
        </li>
        <li>
          <strong>Divulgación de información:</strong>
          <ul className="puntos-articulo primero-solo">
            <p>
              No vendemos, intercambiamos ni transferimos su información
              personal a terceros sin su consentimiento, excepto cuando sea
              necesario para cumplir con la ley, hacer cumplir nuestras
              políticas o proteger nuestros derechos, propiedad o seguridad, o
              la de otros.
            </p>
          </ul>
        </li>
        <li>
          <strong>Seguridad de la información: </strong>
          <ul className="puntos-articulo primero-solo">
            Implementamos medidas de seguridad adecuadas para proteger la
            información personal que recopilamos y almacenamos. Sin embargo,
            tenga en cuenta que ninguna transmisión de datos a través de
            Internet o almacenamiento electrónico es 100% segura, por lo que no
            podemos garantizar su seguridad absoluta.
          </ul>
        </li>
        <li>
          <strong>Sus derechos:</strong>
          <ul className="puntos-articulo primero-solo">
            <p>
              Usted tiene derecho a acceder, corregir o eliminar la información
              personal que tenemos sobre usted. También puede optar por no
              recibir comunicaciones de marketing en cualquier momento. Para
              ejercer estos derechos o si tiene alguna pregunta sobre nuestra
              Política de Privacidad, no dude en ponerse en contacto con
              nosotros a través de los datos de contacto proporcionados a
              continuación.
            </p>
          </ul>
        </li>
        <li>
          <strong>Cambios en la Política de Privacidad:</strong>
          <ul className="puntos-articulo primero-solo">
            <p>
              Nos reservamos el derecho de actualizar esta Política de
              Privacidad en cualquier momento. Le recomendamos que revise
              periódicamente esta página para estar al tanto de cualquier
              cambio. La fecha de la última actualización se indicará al
              comienzo de esta Política de Privacidad.
            </p>
          </ul>
        </li>
        <li>
          <strong>Uso de Cookies:</strong>
          <ul className="puntos-articulo primero-solo">
            <p>
              Utilizamos cookies y tecnologías similares para recopilar
              información sobre su actividad en nuestro sitio web y para mejorar
              su experiencia de usuario. Las cookies son pequeños archivos de
              datos que se almacenan en su navegador y nos permiten recordar
              cierta información sobre usted, como sus preferencias de idioma o
              la información de inicio de sesión. También utilizamos cookies
              para fines de análisis y seguimiento del rendimiento del sitio
              web.
            </p>
          </ul>
        </li>
        <li>
          <strong>Control de cookies:</strong>
          <ul className="puntos-articulo ultimo-punto">
            <p>
              Usted tiene el control sobre las cookies y puede administrarlas en
              la configuración de su navegador. Puede optar por aceptar o
              rechazar ciertas cookies, o configurar su navegador para que le
              notifique cuando se utilicen cookies. Sin embargo, tenga en cuenta
              que algunas partes de nuestro sitio web pueden no funcionar
              correctamente si deshabilita las cookies.
            </p>
          </ul>
        </li>
      </ol>
      <div className="ultimo-parrafo">
        <p className='penultimo'>
          Al utilizar nuestro formulario web, usted acepta los términos de esta
          Política de Privacidad. Si no está de acuerdo con estos términos, por
          favor no utilice nuestro formulario web.
        </p>
        <p className='ultimo'>
          Si tiene alguna pregunta o inquietud sobre esta Política de
          Privacidad, no dude en ponerse en contacto con nosotros a través de
          los siguientes datos de contacto:
        </p>
        <strong>DevWare</strong>
        <strong>info@devware.es</strong>
        <p className='gracias-final'>Gracias por confiar en nosotros con su información personal.</p>
      </div>
    </main>
  )
}
