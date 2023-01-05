import React, { useContext } from "react";
import ItemCount from "./ItemCount"
import { CartContext } from "./Context/CartContext";

const ItemDetail = ({item}) => { 
    const {addItem, cart} = useContext(CartContext)
    
    const onAdd = (quantity) => {
        addItem(item, quantity)
        console.log(cart);
    } 
    return(
            <div className="row d-flex justify-content-center">
                <div className="col-md-4">
                    <img src={item.imagen} className="img-fluid" alt={item.nombre}/>
                </div>
                <div className="col-md-4 text-center">
                    <h2>{item.nombre}</h2>
                    <h4><b>${item.precio}</b></h4>
                    <p>{item.descripcion}</p>
                    {/*
                    /<p className="fs-6 fw-light">Quedan <b>{item.stock}</b> productos disponibles </p>
                    */}                    
                    <ItemCount stock={item.stock} onAdd ={onAdd} />
                    
                </div>    
            </div>        
    )
}

export default ItemDetail; 