import "./ListaOpciones.css"

const ListaOpciones=(props)=>{
    const lpersonajes=[
        "Anime",
        "Series",
        "Películas",
        "Meme",
        "Fantasía",
        "RRSS",
        "Historias"
    ]//Para usar vectores aparte de map(), se debe usar una key (que es prácticamente el índice de búsqueda)

    const cambio2=(e)=>{
        return props.actualizarValor(e.target.value)
    }

    return <div className="lista-opciones" >
        <label>Equipo</label>
        <select value={props.valor} onChange={cambio2}>
            <option value="" disabled defaultValue="" >Seleccione su grupo</option>
            {lpersonajes.map((lpersonajes, index)=>{
                return <option key={index} >{lpersonajes}</option>
            })}
        </select>
    </div>
}

export default ListaOpciones;