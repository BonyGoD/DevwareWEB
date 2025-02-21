/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
//CSS
import './ParrafoPersonalizado.css';

//Multi-Language
import { ServiciosId } from '../globals/languages.js'
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext.jsx";

export function ParrafoPersonalizado({ ServicioId }) {

    const { currentLanguage } = useContext(LanguageContext);

    switch (ServicioId) {
        case ServiciosId.SOLUCIONES:
            return (
                <p className="parrafo-servicios">
                    {currentLanguage === 'ca' ? (
                        <>
                            Ens especialitzem en desenvolupar <span className='color-resaltado'> eines personalitzades </span>
                            que s&apos;adaptin a les necessitats específiques del teu negoci. Ja
                            sigui una <span className='color-resaltado'> aplicació mòbil </span> o una <span className='color-resaltado'> plataforma web</span>, el nostre enfocament
                            està basat en proporcionar-te resultats òptims que impulsin el teu <span className='color-resaltado'> èxit
                            en línia.</span>
                        </>
                    ) : (
                        <>
                            Nos especializamos en desarrollar <span className='color-resaltado'>herramientas personalizadas </span>
                            que se adaptan a las necesidades específicas de tu negocio. Ya
                            sea una <span className='color-resaltado'>aplicación móvil </span> o una <span className='color-resaltado'>plataforma web</span>, nuestro enfoque
                            está en proporcionarte resultados óptimos que impulsen tu <span className='color-resaltado'>éxito
                            en línea.</span>
                        </>
                    )}
                </p>
            )
        case ServiciosId.INNOVACION:
            return (
                <p className="parrafo-servicios">
                    {currentLanguage === 'ca' ? (
                        <>
                            En un món digital en constant evolució, és crucial
                            mantenir-se al dia amb les <span className='color-resaltado'>últimes tendències i tecnologies</span>. En
                            el nostre enfocament, integrem contínuament noves innovacions
                            per assegurar-nos que <span className='color-resaltado'>el teu negoci estigui a l&apos;avantguarda</span>,
                            aprofitant al màxim les oportunitats que ofereix el món
                            digital.
                        </>
                    ) : (
                        <>
                            En un mundo digital en constante evolución, es crucial
                            mantenerse al día con las <span className='color-resaltado'>últimas tendencias y tecnologías</span>. En
                            nuestro enfoque, integramos continuamente nuevas innovaciones
                            para asegurarnos de que <span className='color-resaltado'>tu negocio esté a la vanguardia</span>,
                            aprovechando al máximo las oportunidades que ofrece el mundo
                            digital.
                        </>
                    )}
                </p>
            
            )
        case ServiciosId.EXPERIENCIA_USUARIO:
            return (
                <p className="parrafo-servicios">
                    {currentLanguage === 'ca' ? (
                        <>
                            Entenem que la <span className='color-resaltado'>satisfacció de l&apos;usuari</span> és fonamental per
                            a l&apos;èxit de qualsevol solució digital. Per això, prioritzem la
                            <span className='color-resaltado'> usabilitat i l&apos;experiència de l&apos;usuari</span> en cada pas del procés
                            de desenvolupament. Des del disseny fins a la implementació, ens
                            esforçem per garantir que els teus usuaris tinguin una
                            <span className='color-resaltado'> experiència fluida i agradable</span>.
                        </>
                    ) : (
                        <>
                            Entendemos que la <span className='color-resaltado'>satisfacción del usuario</span> es fundamental para
                            el éxito de cualquier solución digital. Por eso, priorizamos la
                            <span className='color-resaltado'> usabilidad y la experiencia del usuario</span> en cada paso del proceso
                            de desarrollo. Desde el diseño hasta la implementación, nos
                            esforzamos por garantizar que tus usuarios tengan una
                            <span className='color-resaltado'> experiencia fluida y agradable</span>.
                        </>
                    )}
                </p>
            )
        case ServiciosId.INTEGRACION:
            return (
                <p className="parrafo-servicios">
                    {currentLanguage === 'ca' ? (
                        <>
                            En un entorn empresarial cada vegada més interconnectat, la
                            capacitat d&apos;<span className='color-resaltado'>integrar diferents sistemes i plataformes</span> és
                            essencial. Creem solucions que s&apos;integren sense problemes amb
                            els teus sistemes existents, facilitant la gestió i l&apos;intercanvi
                            de dades entre diferents plataformes i dispositius, la qual cosa
                            <span className='color-resaltado'> optimitza l&apos;eficiència del teu negoci</span>.
                        </>
                    ) : (
                        <>
                            En un entorno empresarial cada vez más interconectado, la
                            capacidad de <span className='color-resaltado'>integrar diferentes sistemas y plataformas</span> es
                            esencial. Creamos soluciones que se integran sin problemas con
                            tus sistemas existentes, facilitando la gestión y el intercambio
                            de datos entre diferentes plataformas y dispositivos, lo que
                            <span className='color-resaltado'> optimiza la eficiencia de tu negocio</span>.
                        </>
                    )}
                </p>
            )
        case ServiciosId.ESCALABILIDAD:
            return (
                <p className="parrafo-servicios">
                    {currentLanguage === 'ca' ? (
                        <>
                            Entenem que els negocis evolucionen i canvien amb el temps.
                            Per això, les nostres solucions estan <span className='color-resaltado'>dissenyades per créixer
                            amb tu</span>. Ja sigui ampliant el teu abast, afegir noves
                            funcionalitats o adaptar-te a canvis del mercat, les nostres
                            solucions són <span className='color-resaltado'>flexibles i escalables</span> per satisfer les teves
                            necessitats en constant evolució.
                        </>
                    ) : (
                        <>
                            Entendemos que los negocios evolucionan y cambian con el tiempo.
                            Por eso, nuestras soluciones están <span className='color-resaltado'>diseñadas para crecer
                            contigo</span>. Ya sea que necesites ampliar tu alcance, agregar nuevas
                            funcionalidades o adaptarte a cambios en el mercado, nuestras
                            soluciones son <span className='color-resaltado'>flexibles y escalables</span> para satisfacer tus
                            necesidades en constante evolución.
                        </>
                    )}
                </p>
            )
        case ServiciosId.SOPORTE_TECNICO:
            return (
                <p className="parrafo-servicios">
                    {currentLanguage === 'ca' ? (
                        <>
                            Sabem que fins i tot les solucions més sòlides poden trobar
                            desafiaments tècnics de tant en tant. Per això, oferim un
                            <span className='color-resaltado'> suport tècnic expert i continuat</span> per garantir que els teus
                            sistemes funcionin sense problemes en tot moment. El nostre equip
                            està aquí per <span className='color-resaltado'> ajudar-te a resoldre qualsevol problema </span>i
                            garantir el funcionament òptim de totes les nostres
                            solucions.
                        </>
                    ) : (
                        <>
                            Sabemos que incluso las soluciones más sólidas pueden encontrar
                            desafíos técnicos de vez en cuando. Por eso, ofrecemos un
                            <span className='color-resaltado'> soporte técnico experto y continuo</span> para garantizar que tus
                            sistemas funcionen sin problemas en todo momento. Nuestro equipo
                            está aquí para <span className='color-resaltado'> ayudarte a resolver cualquier problema </span>y
                            garantizar el funcionamiento óptimo de todas nuestras
                            soluciones.
                        </>
                    )}
                </p>
            )
        default:
            return <p className="parrafo-servicios">
                        Nos especializamos en desarrollar <span className='color-resaltado'>herramientas personalizadas </span>
                        que se adaptan a las necesidades específicas de tu negocio. Ya
                        sea una <span className='color-resaltado'>aplicación móvil </span> o una <span className='color-resaltado'>plataforma web</span>, nuestro enfoque
                        está en proporcionarte resultados óptimos que impulsen tu <span className='color-resaltado'>éxito
                        en línea.</span>
                    </p>
    }
}
