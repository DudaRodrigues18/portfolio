import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './componentes/header/Header'
import Footer from './componentes/footer/Footer'
import Main from './componentes/main/Main'
import Contato from './componentes/contato/Contato'
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
        <Contato/>
        <Footer/>
      </>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)