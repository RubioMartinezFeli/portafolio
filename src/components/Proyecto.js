import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { trabajos } from '../data/trabajos';

export const Proyecto = () => {

    /* Usamos el estado para hace que el componente proyecto cambie */ 
    const [proyecto, setProyecto] = useState({});

    const params = useParams();

    // Usamos useEfect para que se ejecute una vez
    // lo siguiente al cargar el componente Proyecto
    // Filter recibe una función como parametro
   useEffect(()=>{
        let proyecto = trabajos.filter(trabajo => trabajo.id === params.id);
        /*console.log(proyecto); nos devuelve un array con un objeto trabajo*/
        setProyecto(proyecto[0])// 0 para coger el primer y unico trabajo del array
   },[params.id])

    return (
      <div className='page page-work'>

        <h1 className='heading'>{proyecto.nombre}</h1>
        
        <div className='mask'>
        <img src={'https://github.com/RubioMartinezFeli/imagenes-portafolio/blob/main/'+proyecto.id+'.png?raw=true'} alt = 'img'/>
        </div>
        
        <p className='p-tecnologia'>{proyecto.tecnologias}</p>
        <p className='p-descripcion'>{proyecto.descripcion}</p>
        <a href={"https://"+proyecto.url} target="_blank" rel="noreferrer">Ir al proyecto</a>
        

  
      </div>
    )
  }
  