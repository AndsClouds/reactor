import "./Texto.css"

function Texto(props){
    //const placeholderModificado= `${props.placeholder}...`;//Preguntar a la inge el pq de los tres puntos
    
    const cambio=(e)=>{//Las funciones son eventos
        return props.actualizarValor(e.target.value)
    }

    return <div className="texto" >
        <label>{props.titulo}</label>
        <input placeholder={props.placeholder} required={props.required} value={props.valor} onChange={cambio}></input>
    </div>
}

export default Texto;