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

function formulario(){
    
    //Esto es para Single Page Application (SPA)
    const envio=(evento)=>{
        evento.preventDefault();
        //console.log(envio, evento);
    }

    return <section className="formulario">
        <form onSubmit={envio}>
            <h2>Rellena el formulario para crear un nuevo Personaje</h2>
            <Texto titulo="Nombre" placeholder="Ingresar nombre"></Texto>
            <Texto titulo="Rango" placeholder="Ingresar rango"></Texto>
            <Texto titulo="Foto" placeholder="Ingresar enlace"></Texto>
            <ListaOpciones></ListaOpciones>
            <Boton>Crear</Boton>
        </form>
    </section>
}

export default formulario;