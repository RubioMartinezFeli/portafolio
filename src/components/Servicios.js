import React from 'react'

export const Servicios = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Servicios</h1>
   

      <div className='page-curriculum'>


        <div className='experiencia'>
          <h2>Diseño web</h2>
          <ol className='ol-servicios'>
            <li>Responsividad : Una web responsiva está desarrollado para adaptarse a los equipos móviles, como Smartphones y tablets.</li>
            <li>Escaneabilidad: Podemos afirmar que un contenido es escaneable cuando permite que un lector sea capaz de pasar los ojos por el texto y tener noción de lo que va a ser tratado.</li>
            <li>Tipografía: Experiencia de lectura del usuario</li>
            <li>Velocidad de carga: En un mundo donde todos parecen estar siempre apurados, tener un sitio web de carga rápida es esencial. Según Google, los sitios que tardan más de 2 segundos en cargarse dañan tanto la experiencia del usuario como la indexación del sitio.</li>
          </ol>
        </div>

        <div className='conocimientos'>
          <h2>Desarrollo web</h2>
          <ol className='ol-servicios'>
            <li>Desarrollo frontend: Definir la jerarquía de la información que se visualiza y su distribución en JavaScript o React</li>
            <li>Desarrollo backend: Administrar el almacenamiento de datos y la comunicación de la página con bases de datos y el servidor en PHP o Node.js</li>
            <li>Optimización de sitios web, realizar cambios, buscar y corregir errores.</li>
        </ol>
        </div>

        <article className='educacion'>
          <h2>Posicionamiento web</h2>
          <ol className='ol-servicios'>
            <li>SEO: proceso de mejorar la visibilidad de un sitio web en los resultados orgánicos de los buscadores.</li>
            <li>SEM: es una práctica que mejora la visibilidad de una marca mediante acciones de marketing pagadas.</li>
            <li>Administrar redes sociales.</li>
          </ol>
        </article>

      </div>
      
    </div>
  )
}
