import "./CardPersonaje.css"

const Card =(props)=>{
    return <div className="card" >
        <div className="encabezado" >
            <img src="" alt="imagen"></img>
        </div>

        <div className="letras">
            <h4>{props.nombreTitular}</h4>
            <h5>Rango</h5>
        </div>
    </div>
}

export default Card;