import { useState } from "react";
import "./Formulario.css"
import Texto from "../Texto/Texto.js"
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton/Boton.js";

// function formulario(){
//     return <section className="formulario">
        
//         <form>
//             <h2>Rellena el formulario para crear un nuevo Personaje</h2>
//             <Texto titulo="Nombre" placeholder="Ingresar nombre"></Texto>
//             <Texto titulo="Rango" placeholder="Ingresar rango"></Texto>
//             <Texto titulo="Foto" placeholder="Ingresar enlace"></Texto>
//             <ListaOpciones></ListaOpciones>
//             <Boton>Crear</Boton>
//         </form>
//     </section>
// }

// function formulario(){
    
//     //Esto es para Single Page Application (SPA)
//     const envio=(evento)=>{
//         evento.preventDefault();
//         //console.log(envio, evento);
//     }

//     return <section className="formulario">
//         <form onSubmit={envio}>
//             <h2>Rellena el formulario para crear un nuevo Personaje</h2>
//             <Texto titulo="Nombre" placeholder="Ingresar nombre" required></Texto>
//             <Texto titulo="Rango" placeholder="Ingresar rango" required></Texto>
//             <Texto titulo="Foto" placeholder="Ingresar enlace" required></Texto>
//             <ListaOpciones></ListaOpciones>
//             <Boton>Crear</Boton>
//         </form>
//     </section>
// }

function Formulario(){

    const [nombre,actualizarNombre]=useState("")
    const [rango,actualizarRango]=useState("")
    const [foto,actualizarFoto]=useState("")
    const [grupo,actualizarGrupo]=useState("")
    
    //Esto es para Single Page Application (SPA)
    const envioDatos=(evento)=>{
        evento.preventDefault();
        //console.log(envio, evento);
        let datosEnviar={
            nombre: nombre,
            rango:rango,
            foto:foto,
            grupo:grupo
        }
        //console.log(datosEnviar)
        const createCard=(nombre, rango, foto, grupo)=>{
    
            return fetch("http://localhost:3001/cards", {
                method: "POST",
                headers:{ "Content-type": "application/json", },
                body:JSON.stringify({nombre, rango, foto, grupo, id: (Math.random()*100)})
            })
        };
        createCard(datosEnviar.nombre, datosEnviar.rango, datosEnviar.foto, datosEnviar.grupo);
    }

    return <section className="formulario">
        <form onSubmit={envioDatos}>
            <h2>Rellena el formulario para crear un nuevo Personaje</h2>
            <Texto titulo="Nombre" placeholder="Ingresar nombre" required valor={nombre} actualizarValor={actualizarNombre}></Texto>
            <Texto titulo="Rango" placeholder="Ingresar rango" required valor={rango} actualizarValor={actualizarRango}></Texto>
            <Texto titulo="Foto" placeholder="Ingresar enlace" required valor={foto} actualizarValor={actualizarFoto}></Texto>
            <ListaOpciones valor={grupo} actualizarValor={actualizarGrupo}></ListaOpciones>
            <Boton>Crear</Boton>
        </form>
    </section>
}

export default Formulario;