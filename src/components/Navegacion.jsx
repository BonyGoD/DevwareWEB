/* eslint-disable react/prop-types */
//Assets
import { Logo } from "./Logo.jsx"

//Componentes
import { MenuHamburguesa } from "./MenuHamburguesa.jsx"

//CSS
import './Navegacion.css'


export function Navegacion({isCustomColor}) {

    return (
    <main>
        <div className={`header-superior-navegacion ${isCustomColor ? 'color-header-personalizado' : ''}`}>
            <Logo />
            <MenuHamburguesa />
      </div>
    </main>
    );
}
