import { useState } from 'react';
import Pagina from './componentes/PaginaPersonajes/PaginaPersonajes.js';
import Header from './componentes/Header/Header.js';
import Footer from './componentes/Footer/Footer.js';
import Formulario from './componentes/Formulario/Formulario.js';
import './App.css';

function App() {
  //const [variable, asignador de valor a la variable]=useState(´valor inicial´)
  const [mostrarFormulario, actualizarFormulario]=useState(true);

  const cambiarMostrar=()=>{
    actualizarFormulario(!mostrarFormulario)
  }

  return (
    <div>
      <Header></Header>
      {mostrarFormulario && <Formulario></Formulario>}
      <Pagina cambiarMostrar={cambiarMostrar} ></Pagina>
      <Footer></Footer>
      
    </div>
    
    
  );
}

export default App;
