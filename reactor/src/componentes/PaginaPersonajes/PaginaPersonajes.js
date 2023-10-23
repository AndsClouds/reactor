import "./PaginaPersonajes.css"
import SeccionPersonajes from "../SeccionPersonajes/SeccionPersonajes.js";
//import {useState} from "react"

const Pagina=(props)=>{
    console.log(props);
    return <section className="paginaPersonajesSection" >
        <h3 className="title" >
            MIS PERSONAJES
        </h3>
        <img src="./img/plus_button.png" alt="plus_button" onClick={props.cambiarMostrar} ></img>
        <div className="allSections">
            <SeccionPersonajes cabeza="Anime"></SeccionPersonajes>
            <SeccionPersonajes cabeza="Series"></SeccionPersonajes>
            <SeccionPersonajes cabeza="Películas"></SeccionPersonajes>
            <SeccionPersonajes cabeza="Meme"></SeccionPersonajes>
            <SeccionPersonajes cabeza="Fantasía"></SeccionPersonajes>
            <SeccionPersonajes cabeza="RRSS"></SeccionPersonajes>
            <SeccionPersonajes cabeza="Historias"></SeccionPersonajes>
        </div>
        
    </section>
}

export default Pagina