import React from 'react'

export const Contacto = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Contacto</h1>
   
      <form className='contact' action='mailto:'>
        <input type='text' placeholder='Nombre'/>
        <input type='text' placeholder='Apellidos'/>
        <input type='e-mail' placeholder='Email'/>
        <input type='text' placeholder='Nombre'/>
        <textarea placeholder='Motivo de contacto'/>
        <input type='submit' value='Enviar'/>
      </form>
      
    </div>
  )
}
