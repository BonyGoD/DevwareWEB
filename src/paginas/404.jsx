import React from 'react'


//CSS
import './404.css'





export function NotFound() {

 
    

    function login() {
        
        const userLogueado = "¡Te has logueado!";
        const errorUserPass = "Usuario y contraseña erroneas";
        const errorUser = "Usuario incorrecto";
        const errorPass = "Contraseña incorrecta";
        const usuario = document.getElementById(usuario);
        const contraseña = document.getElementById(contraseña);
        
        if (usuario === "Xavi"){
            console.log("ok");

        }
             
  
        

    }
 

    return (       
     

    <div className='contenedor-formulario'>
        <form className='form'>
            <label className='user'>Usuario:
                <input id='usuario' className='input-user'/>
            </label>
            <label className='pass'>Contraseña:
                <input id='contraseña'className='input-contraseña'/>
            </label>
            <button className='button' onClick={login} >LOGIN</button>
        </form>
    </div>

    )
}
