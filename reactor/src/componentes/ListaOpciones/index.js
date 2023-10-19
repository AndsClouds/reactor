import "./ListaOpciones.css"

const ListaOpciones=()=>{
    const lpersonajes=[
        "Anime",
        "Series",
        "Películas",
        "Meme",
        "Fantasía",
        "RRSS",
        "Historias"
    ]//Para usar vectores aparte de map(), se debe usar una key (que es prácticamente el índice de búsqueda)

    return <div className="lista-opciones" >
        <label>Equipo</label>
        <select>
            {lpersonajes.map((lpersonajes, index)=>{
                return <option key={index} >{lpersonajes}</option>
            })}
        </select>
    </div>
}

export default ListaOpciones;