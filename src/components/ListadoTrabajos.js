import React from 'react'
import { Link } from 'react-router-dom';
import { trabajos } from '../data/trabajos';

export const ListadoTrabajos = ({limite}) => {
    /* Con slice(x, y) le decimos recorre de x a y (limite a map()) */
  return (
      <section className='works'>{
        trabajos.slice(0, limite).map((trabajo)=>{
           return(
            <article key={trabajo.id} className ='work-item'>
              <div className='mask'>
                <img src={'https://github.com/RubioMartinezFeli/imagenes-portafolio/blob/main/'+trabajo.id+'.png?raw=true'} alt = 'img'/>
              </div>
              <span>{trabajo.categorias}</span>
              <h2><Link to={"/proyecto/" + trabajo.id}>{trabajo.nombre}</Link></h2>
              <h3>{trabajo.tecnologias}</h3>
            </article>
           );
        })
      }</section>   
  )
}
