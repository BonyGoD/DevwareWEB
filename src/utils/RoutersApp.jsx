//React
import { Route } from 'react-router-dom'

//Paginas
import { Contacto } from '../paginas/Contacto.jsx'
import { Nosotros } from '../paginas/Nosotros.jsx'
import { Servicios } from '../paginas/NuestrosServicios.jsx'
import { NotFound } from '../paginas/404.jsx'


export function RoutersApp() {
    return [
        <Route path='/nosotros' key='nosotros' element={<Nosotros/>}/>,
        <Route path='/servicios' key='servicios' element={<Servicios/>}/>,
        <Route path='/contacto' key='contacto' element={<Contacto/>} />,
        <Route path='/loginxavi' key='404' element={<NotFound/>} />,
        <Route path='*' key='notFound' element={<h1>404 NOT FOUND</h1>} />
    ];
}