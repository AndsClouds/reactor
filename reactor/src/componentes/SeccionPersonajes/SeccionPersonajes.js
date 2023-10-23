import "./SeccionPersonajes.css"
import Card from "../CardPersonaje/CardPersonaje.js";

const SeccionPersonajes=(props)=>{

    const crearCard=()=>{
        return fetch("http://localhost:3001/cards").then(queryda=>queryda.json());
    };
    
    let listaCards=[];
    
        crearCard().then((data)=>{
            data.forEach((card)=>{
                
                //valores card. a una variable
                let granNombre=card.nombre;
                let granRango=card.rango;
                let granFoto=card.foto;
                let granGrupo=card.grupo;

            });
            
        }).catch((error)=>console.log("quiero llorar"));


    return <div className="seccionPersonajes">
        <h2>{props.cabeza}</h2>
        
        {listaCards.map((listaCards, index)=>{
                return <Card key={index} nombreTitular={listaCards.granNombre}></Card>
            })}
        
        
        
    </div>

}

export default SeccionPersonajes;