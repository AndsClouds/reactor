import "./Texto.css"

function Texto(props){
    const placeholderModificado= `${props.placeholder}...`;//Preguntar a la inge el pq de los tres puntos
    return <div className="texto" >
        <label>{props.titulo}</label>
        <input placeholder={props.placeholder} ></input>
    </div>
}

export default Texto;