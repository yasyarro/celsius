import React, { useState, useEffect } from "react";
import './ItemCount.css'

const ItemCount = () => {
  
  const [carrito, setCarrito] = useState(0);
  const [stock, setStock] = useState(3);

  const handleIncrement = () => {if (carrito < stock) {
      
  
        setCarrito(carrito + 1);
    }
    
    };

  

  const handleDecrement = () => {
    if (carrito > 0) {
      
  
      setCarrito(carrito - 1)
    
  }
 
  };
  
 

  useEffect(() => {
    setTimeout(() => {
      console.log("Gettin' Data");
    }, 2000);
  }, []);

  return (
    <div>
      
      <h2>{carrito}</h2>
      <h2>Stock disponible del producto = {stock} unidades</h2>
      <button className = "boton" onClick={handleIncrement}>Comprar!</button>
      <button className = "boton" onClick={handleDecrement}>Eliminar del carrito</button>
    
      
    </div>
  );
};

export default ItemCount;

