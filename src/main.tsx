import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './componentes/header/Header'
import Footer from './componentes/footer/Footer'
import Main from './componentes/main/Main'
import './main.css'

import {createBrowserRouter,RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: 
      <>
      <Main/>
      <Footer/>
      </>,
  },
  {
    path: "/contato",
    element: 
      <>  
        <Header/>
        <div className="contato-main">
        <h1>Contato</h1>
        <form className='formContato'>
            <input className='input-contato' type="text" placeholder='Nome Completo'/>
            <input className='input-contato' type="email" placeholder='E-mail'/>
            <input className='input-contato' type="tel" placeholder='Telefone' maxLength={11}/>
            <input className='input-contato' type="text" placeholder='Endereço'/>
            <input className='button-enviar' type="submit" placeholder='Enviar'/>
        </form>
        </div>
        <Footer/>
      </>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)