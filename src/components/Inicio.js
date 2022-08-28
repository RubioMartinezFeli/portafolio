import React from 'react'
import { Link } from 'react-router-dom'
import { ListadoTrabajos } from './ListadoTrabajos'

export const Inicio = () => {
  return (
    <div className='home'>
      <h1>Hola, soy <strong className='strong-principal'>Feli Rubio</strong> y soy desarrollador web en Valencia,
        y ofrezco mis servicios de <strong className='strong-principal'>programación</strong> y <strong className='strong-principal'> desarrollo</strong> en todo
        tipo de proyecto web.
      </h1>

      <div className='imagen-ini'>
        <img src='https://github.com/RubioMartinezFeli/imagenes-portafolio/blob/main/valencia.jpeg?raw=true' alt = 'img'/>
        <img src='https://github.com/RubioMartinezFeli/imagenes-portafolio/blob/main/inicio.jpeg?raw=true' alt = 'img'/>
      </div>

      <h2 className='heading'>Por el momento...</h2>

      <h2 className='presentacion'>
        Soy estudiante de segundo del ciclo formativo de Desarrollo de Aplicaciones Web en IES Sant Vicent Ferrer de Algemesi. Busco una empresa de desarrollo web para poder hacer practicas profesionales o trabajar. Considero que trabajar en una buena empresa sería una gran oportunidad para el desarrollo de mi carrera profesional.

        Durante mi etapa como estudiante, he tenido ocasión de ampliar mis conocimientos y aprender nuevas tecnologias de desarrollo como por ejemplo la famosa librería React de JavaScript , que considero de especial valía para poder trabajar en una empresa de desarrollo.

        Considero que las prácticas en empresa podrían resultar muy provechosas para mi desarrollo y especialización tanto personal como profesional. Además, creo que yo podría aportarles la pasión y el entusiasmo por el  <strong className='strong2'>trabajo bien hecho, responsabilidad, habilidades y conocimientos.</strong>
      </h2>

      <h2 className='heading'>¿Por qué React?</h2>

      <h2 className='presentacion'>React es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página (SPA, Single page aplication). Es mantenido por Facebook y la comunidad de software libre.
        Personalmente pienso que es una muy buena tecnologia para desarrollar aplicaciones web con esta librería, ya que, cuando te familiarizas con el entorno y la sitaxis JSX (extensión de sintaxis de JavaScript que nos permite mezclar JS y HTML), la labor de desarrollo se facilita.
      </h2>

      <p className='presentacion'>
        La base de React son los componentes que son archivos js o jsx que importan la librería de React, cada elemento en una web puede ser un componente, por ejemplo una caja, un menú, una pagina o vista completa, un formulario etc... Se pueden importar entre ellos de tal forma que podemos introducirlos en otros componentes y así reutilizar elementos y tener más facilidad para montar la interfaz web. Siguen la sintaxis JSX y normalmente retornan una renderización por pantalla.
        React tiene unas funciones especiales llamadas Hooks que nos facilitan las cosas y mucho más...

      </p>

      <section>
        <h2 className='heading'>Algunos de mis proyectos</h2>
        <p>Estos son algunos de mis trabajos de desarrollo web</p>

        <ListadoTrabajos limite="2" />
        {/* Enviamos prop que limite el numero de proyectos que se muestran */}

      </section>

      <h2 className='title h2-ayuda'>
        Te ayudo a crear tu sitio o aplicación web, tener más visibilidad y relevancia
        en internet. <Link to="/contacto">Contacta</Link>
      </h2>

    </div>
  )
}
