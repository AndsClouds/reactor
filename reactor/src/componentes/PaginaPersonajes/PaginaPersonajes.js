import "./PaginaPersonajes.css"
import {useState} from "react"

const Pagina=(props)=>{
    console.log(props);
    return <section className="paginaPersonajesSection" >
        <h3 className="title" >
            MIS PERSONAJES
        </h3>
        <img src="./img/plus_button.png" alt="plus_button" onClick={props} ></img>
    </section>
}

export default Pagina