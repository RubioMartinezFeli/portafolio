import React from 'react'
import {Routes, Route, BrowserRouter, Navigate} from "react-router-dom"
import { Contacto } from '../Contacto'
import { Curriculum } from '../Curriculum'
import { Inicio } from '../Inicio'
import { Footer } from '../layout/Footer'
import { HeaderNav } from '../layout/HeaderNav'
import { Portafolio } from '../Portafolio'
import { Proyecto } from '../Proyecto'
import { Servicios } from '../Servicios'

export const MisRutas = () => {
  return (
    <BrowserRouter>
        {/* HEADER Y NAVEGACIÓN */}
        <HeaderNav />

        {/* CONTENIDO CENTRAL */}
        <section className='content'>
          <Routes>
              <Route path='/' element={<Navigate to="/inicio"/>} />
              <Route path='/inicio' element={<Inicio />} />
              <Route path='/portafolio' element={<Portafolio />} />
              <Route path='/servicios' element={<Servicios />} />
              <Route path='/contacto' element={<Contacto />} />
              <Route path='/curriculum' element={<Curriculum />} />
              <Route path='/proyecto/:id' element={<Proyecto />}/>
              <Route path='*' element={
                <div className='page'>
                  <h1 className='heading'>Error 404</h1>
                </div>
              } />
          </Routes>
        </section>
        
        {/* FOOTER */}
        <Footer />


    </BrowserRouter>
  )
}
