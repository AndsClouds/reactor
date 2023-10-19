import "./Formulario.css"
import Texto from "../Texto/Texto.js"

function formulario(){
    return <section>
        
        <form>
            <h2>Rellena el formulario para crear un nuevo Personaje</h2>
            <Texto titulo="Nombre" placeholder="Ingresar nombre"></Texto>
        </form>
    </section>
}

//export default formulario;