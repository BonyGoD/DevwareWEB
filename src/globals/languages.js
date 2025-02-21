//Assets
import Escalabilidad from '../assets/imagenes/servicios/escalabilidad.webp'
import ExperienciaUsuario from '../assets/imagenes/servicios/experiencia-usuario.webp'
import Innovacion from '../assets/imagenes/servicios/Innovacion.webp'
import Integracion from '../assets/imagenes/servicios/Integracion.webp'
import Soporte_tecnico from '../assets/imagenes/servicios/servicio-tecnico.webp'
import Soluciones from '../assets/imagenes/servicios/Soluciones.webp'

export const getText = (language, key) => {
    const text = literals[language][key];
    if (text === undefined) {
      return "";
    }
    return literals[language][key];
  };

export const idTituloAyuda = 'TITULO_AYUDA'
export const idDescripcionAyuda = 'DESCRIPCION_AYUDA'
export const idTituloContactoNosotros = 'TITULO_NOSOTROS'
export const idDescripcionContactoNosotros = 'DESCRIPCION_NOSOTROS'

  export const literals = {
    es: {
        NUESTROS_SERVICIOS: "Nuestros Servicios",
        TITULO_TECNOLOGIAS: "Stack tecnológico",
        DESCRIPCION_TECNOLOGIAS: "Estas son las principales tecnologías que utilizamos en nuestros proyectos",
        CONTACTANOS: "Contáctanos",
        DESCRIPCION_FOOTER: "Transformamos tu negocio con soluciones a medida: desarrollo web, apps móviles y software de escritorio.",
        SIGUENOS: "Síguenos",
        SERVICIOS: "Servicios",
        LINK_SERVICIOS_SOLUCIONES: "Soluciones Web/App",
        LINK_SERVICIOS_INNOVACION: "Innovación tecnológica",
        LINK_SERVICIOS_EXPERIENCIA_USUARIO: "Experiencia de usuario",
        LINK_SERVICIOS_INTEGRACION: "Integracion sin fisuras",
        LINK_SERVICIOS_ESCALABILIDAD: "Estabilidad y flexibilidad",
        LINK_SERVICIOS_SOPORTE_TECNICO: "Soporte técnico experto",
        MAIL_DEVWARE: "info@devware.es",
        DERECHOS_RESERVADOS: "DevWare © 2024 - Todos los derechos reservados",
        ERROR_NOMBRE: "Por favor, introduce tu nombre",
        ERROR_EMAIL: "Por favor, introduce un email válido",
        ERROR_DESCRIPCION: "Por favor, introduce una descripción",
        ENVIO_CORRECTO: "Datos enviados correctamente",
        ENVIO_ERROR: "Ha ocurrido un error al enviar los datos",
        OK_MAIL: 'Nos pondremos en contacto contigo lo antes posible.',
        TITULO_OK_MAIL: '¡Gracias por contactar con nosotros!',
        OK: 'Ok',
        TITULO_SMALL_CONTACTO: '¿En que podemos ayudarte?',
        TITULO_CONTACTO: '¡Hablemos y hagamos realidad tus proyectos digitales juntos!',
        DESCRIPCION_CONTACTO1: 'Estamos deseando hablar contigo, ya sea para explorar opciones personalizadas o para obtener más información sobre cómo impulsamos la transformación digital de tu negocio. Nuestros servicios abarcan ',
        DESCRIPCION_CONTACTO_STRONG: 'diseño web, aplicaciones móviles y software de escritorio',
        DESCRIPCION_CONTACTO2: ', diseñados a medida para tus necesidades específicas.',
        PARRAFO_PRIVACIDAD1: 'He leído y acepto la ',
        PARRAFO_PRIVACIDAD_STRONG: 'Política de Privacidad',
        NOMBRE_FORM: 'Nombre',
        TELEFONO_FORM: 'Teléfono',
        EMAIL_FORM: 'Email',
        DESCRIPCION_FORM: 'Descripción',
        SUBDESCRIPCION_FORM: 'Dejanos tu mensaje aqui',
        TITULO_NOSOTROS: '¿Quieres trabajar con nosotros?',
        DESCRIPCION_NOSOTRO: 'Ponte en contacto y cuéntanos que necesitas',
        TITULO_AYUDA: '¿Necesitas ayuda?',
        DESCRIPCION_AYUDA: 'Ponte en contacto con nosotros y resolveremos tus necesidades',
        TITULO_CLIENTES: 'Nuestro último proyecto',
    },
    ca: {
        NUESTROS_SERVICIOS: "Els Nostres Serveis",
        TITULO_TECNOLOGIAS: "Stack tecnológic",
        DESCRIPCION_TECNOLOGIAS: "Aquestes són les principals tecnologies que utilitzem als nostres projectes",
        CONTACTANOS: "Contácta-ns",
        DESCRIPCION_FOOTER: "Transformem el teu negoci amb solucions a mida: desenvolupament web, aplicacions mòbils i software d'escriptori.",
        SIGUENOS: "Segueix-nos",
        SERVICIOS: "Serveis",
        LINK_SERVICIOS_SOLUCIONES: "Solucions Web/App",
        LINK_SERVICIOS_INNOVACION: "Innovació tecnológica",
        LINK_SERVICIOS_EXPERIENCIA_USUARIO: "Experiencia d'usuari",
        LINK_SERVICIOS_INTEGRACION: "Integració sense fissures",
        LINK_SERVICIOS_ESCALABILIDAD: "Estabilitat i flexibilitat",
        LINK_SERVICIOS_SOPORTE_TECNICO: "Suport técnic expert",
        MAIL_DEVWARE: "info@devware.es",
        DERECHOS_RESERVADOS: "DevWare © 2024 - Tots els drets reservats",
        ERROR_NOMBRE: "Siusplau, introdueix el teu nom",
        ERROR_EMAIL: "Siusplau, introdueix un email válid",
        ERROR_DESCRIPCION: "Siusplau, introdueix una descripció",
        ENVIO_CORRECTO: "Dades enviades correctament",
        ENVIO_ERROR: "S'ha produït un error en enviar les dades",
        OK_MAIL: 'Ens posarem en contacte amb tu el més aviat possible.',
        TITULO_OK_MAIL: 'Gràcies per posar-te en contacte amb nosaltres!',
        OK: 'Ok',
        TITULO_SMALL_CONTACTO: 'En què podem ajudar-te?',
        TITULO_CONTACTO: 'Parlem i fem realitat els teus projectes digitals junts!',
        DESCRIPCION_CONTACTO1: 'Estem desitjant parlar amb tu, ja sigui per explorar opcions personalitzades o per obtenir més informació sobre com impulsem la transformació digital del teu negoci. Els nostres serveis inclouen ',
        DESCRIPCION_CONTACTO_STRONG: 'disseny web, aplicacions mòbils i software d\'escriptori',
        DESCRIPCION_CONTACTO2: ', dissenyats a mida per a les teves necessitats específiques.',
        PARRAFO_PRIVACIDAD1: 'He llegit i accepto la ',
        PARRAFO_PRIVACIDAD_STRONG: 'Política de Privacitat',
        NOMBRE_FORM: 'Nom',
        TELEFONO_FORM: 'Telèfon',
        EMAIL_FORM: 'Email',
        DESCRIPCION_FORM: 'Descripció',
        SUBDESCRIPCION_FORM: 'Deixa\'ns el teu missatge aquí',
        TITULO_NOSOTROS: 'Vols treballar amb nosaltres?',
        DESCRIPCION_NOSOTROS: 'Posa\'t en contacte i explica\'ns què necessites',
        TITULO_AYUDA: 'Necessites ajuda?',
        DESCRIPCION_AYUDA: 'Posa\'t en contacte amb nosaltres i resoldrem les teves necessitats',
        TITULO_CLIENTES: 'El nostre últim projecte',
    }
};

export const TextosCards = {
  es: {
    TITULO_CARDS: 'Qué ofrecemos',
  },
  ca: {
    TITULO_CARDS: 'Què oferim',
  }
}

export const ServiciosId = {
  SOLUCIONES: 'SOLUCIONES',
  INNOVACION: 'INNOVACION',
  EXPERIENCIA_USUARIO: 'EXPERIENCIA_USUARIO',
  INTEGRACION: 'INTEGRACION',
  ESCALABILIDAD: 'ESCALABILIDAD',
  SOPORTE_TECNICO: 'SOPORTE_TECNICO',
}

export const NuestrosServicios = [
  {
    es: {
      id: 1,
      titulo: 'Soluciones Web/App',
      descripcion: ServiciosId.SOLUCIONES,
      imagen: Soluciones,
    },
    ca: {
      id: 1,
      titulo: 'Solucions Web/App',
      descripcion: ServiciosId.SOLUCIONES,
      imagen: Soluciones,
    },
  },
  {
    es: {
      id: 2,
      titulo: 'Innovación Tecnológica',
      descripcion: ServiciosId.INNOVACION,
      imagen: Innovacion,
    },
    ca: {
      id: 2,
      titulo: 'Innovació Tecnològica',
      descripcion: ServiciosId.INNOVACION,
      imagen: Innovacion,
    },
  },
  {
    es: {
      id: 3,
      titulo: 'Experiencia del Usuario',
      descripcion: ServiciosId.EXPERIENCIA_USUARIO,
      imagen: ExperienciaUsuario,
    },
    ca: {
      id: 3,
      titulo: 'Experiència de l’Usuari',
      descripcion: ServiciosId.EXPERIENCIA_USUARIO,
      imagen: ExperienciaUsuario,
    },
  },
  {
    es: {
      id: 4,
      titulo: 'Integración sin Fisuras',
      descripcion: ServiciosId.INTEGRACION,
      imagen: Integracion,
    },
    ca: {
      id: 4,
      titulo: 'Integració sense fissures',
      descripcion: ServiciosId.INTEGRACION,
      imagen: Integracion,
    },
  },
  {
    es: {
      id: 5,
      titulo: 'Estabilidad y Flexibilidad',
      descripcion: ServiciosId.ESCALABILIDAD,
      imagen: Escalabilidad,
    },
    ca: {
      id: 5,
      titulo: 'Estabilitat i flexibilitat',
      descripcion: ServiciosId.ESCALABILIDAD,
      imagen: Escalabilidad,
    },
  },
  {
    es: {
      id: 6,
      titulo: 'Soporte Técnico',
      descripcion: ServiciosId.SOPORTE_TECNICO,
      imagen: Soporte_tecnico,
    },
    ca: {
      id: 6,
      titulo: 'Suport Tècnic',
      descripcion: ServiciosId.SOPORTE_TECNICO,
      imagen: Soporte_tecnico,
    },
  },
]

export const TextosNosotros = [
  {
    es: {
      id: 1,
      PARRAFO:
        'En DevWare, nos apasiona impulsar el éxito de nuestros clientes a través de soluciones tecnológicas innovadoras y personalizadas. Somos una empresa dedicada a proporcionar servicios de desarrollo de software y consultoría, con un enfoque centrado en satisfacer las necesidades específicas de cada cliente.',
    },
    ca: {
      id: 1,
      PARRAFO:
        'A DevWare, ens apassiona impulsar l’èxit dels nostres clients a través de solucions tecnològiques innovadores i personalitzades. Som una empresa dedicada a proporcionar serveis de desenvolupament de software i consultoria, amb un enfocament centrat en satisfer les necessitats específiques de cada client.',
    }
  },
  {
    es: {
      id: 2,
      PARRAFO:
        'Nuestro equipo está formado por expertos en desarrollo web y móvil, así como en integración de sistemas y experiencia del usuario. Nos especializamos en diseñar y desarrollar soluciones a medida que ayudan a nuestros clientes a optimizar sus procesos, mejorar su presencia en línea y alcanzar sus objetivos comerciales.',
    },
    ca: {
      id: 2,
      PARRAFO:
        'El nostre equip està format per experts en desenvolupament web i mòbil, així com en integració de sistemes i experiència de l’usuari. Ens especialitzem en dissenyar i desenvolupar solucions a mida que ajuden als nostres clients a optimitzar els seus processos, millorar la seva presència en línia i assolir els seus objectius comercials.',
    }
  },
  {
    es: {
      id: 3,
      PARRAFO:
        'En DevWare, abrazamos la innovación tecnológica como principio fundamental. Nos mantenemos al tanto de las últimas tendencias y tecnologías para ofrecer a nuestros clientes soluciones que estén a la vanguardia del mercado. Desde la inteligencia artificial hasta la computación en la nube, nos esforzamos por integrar las herramientas más avanzadas en cada proyecto que emprendemos.',
    },
    ca: {
      id: 3,
      PARRAFO:
        'A DevWare, abraçem la innovació tecnològica com a principi fonamental. Ens mantenim al dia de les últimes tendències i tecnologies per oferir als nostres clients solucions que estiguin a la vanguardia del mercat. Des de la intel·ligència artificial fins a la computació al núvol, ens esforcem per integrar les eines més avançades a cada projecte que emprenem.',
    }
  },
  {
    es: {
      id: 4,
      PARRAFO:
        'Entendemos que la integración sin fisuras es crucial para el éxito de cualquier proyecto. Por eso, nos especializamos en crear sistemas interconectados que facilitan la gestión y el flujo de datos entre diferentes plataformas y dispositivos. Nuestras soluciones están diseñadas para ser escalables y flexibles, lo que significa que crecen junto con tu negocio y se adaptan a los cambios del mercado.',
    },
    ca: {
      id: 4,
      PARRAFO:
        'Entenem que la integració sense fissures és crucial per l’èxit de qualsevol projecte. Per això, ens especialitzem en crear sistemes interconnectats que faciliten la gestió i el flux de dades entre diferents plataformes i dispositius. Les nostres solucions estan dissenyades per ser escalables i flexibles, el que significa que creixen juntament amb el teu negoci i s’adapten als canvis del mercat.',
    }
  },
  {
    es: {
      id: 5,
      PARRAFO:
        'Además, en DevWare, no nos detenemos en la entrega del proyecto. Nos comprometemos a brindar un soporte técnico experto y continuo para garantizar el funcionamiento óptimo de todas nuestras soluciones y resolver cualquier problema que pueda surgir.',
    },
    ca: {
      id: 5,
      PARRAFO:
        'A més, a DevWare, no ens aturem en l’entrega del projecte. Ens comprometem a oferir un suport tècnic expert i continuat per garantir el funcionament òptim de totes les nostres solucions i resoldre qualsevol problema que pugui sorgir.',
    
    }
  },
  {
    es: {
      id: 6,
      PARRAFO:
        'Si estás buscando un socio tecnológico confiable que te ayude a alcanzar tus metas empresariales, ¡no busques más! En DevWare, estamos aquí para ayudarte a llevar tu negocio al siguiente nivel con soluciones tecnológicas efectivas y de vanguardia. Contáctanos hoy mismo para comenzar tu viaje hacia la innovación y el éxito digital.',
    },
    ca: {
      id: 6,
      PARRAFO:
        'Si estàs buscant un soci tecnològic fiable que t’ajudi a assolir les teves metes empresarials, no busquis més! A DevWare, estem aquí per ajudar-te a portar el teu negoci al següent nivell amb solucions tecnològiques efectives i d’avantguarda. Contacta amb nosaltres avui mateix per començar el teu viatge cap a la innovació i l’èxit digital.',
    }
  },
]

export const TextosLinks = {
  es: {
    INICIO: 'Inicio',
    SOBRE_NOSOTROS: 'Sobre Nosotros',
    SERVICIOS: 'Servicios',
    CONTACTO: 'Contacto',
  },
  ca: {
    INICIO: 'Inici',
    SOBRE_NOSOTROS: 'Sobre Nosaltres',
    SERVICIOS: 'Serveis',
    CONTACTO: 'Contacte',
  }
}

export const TextosHeader = {
  es: {
    TITULO: 'Soluciones digitales para tu negocio',
    DESCRIPCION:
      'Impulsamos la transformación digital de tu negocio con soluciones personalizadas que incluyen desarrollo web, aplicaciones móviles y software de escritorio.',
  },
  ca: {
    TITULO: 'Solucions digitals per al teu negoci',
    DESCRIPCION:
      'Impulsem la transformació digital del teu negoci amb solucions personalitzades que inclouen desenvolupament web, aplicacions mòbils i software d\'escriptori.',
  }
}


