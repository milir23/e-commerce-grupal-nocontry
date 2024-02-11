// TarjetaEcommerce.jsx
import React from 'react';


const TarjetaEcommerce = ({ nombre, tipo, precio, onAgregarAlCarrito }) => (
  <div className="tarjeta-ecommerce">
    <h3>{nombre}</h3>
    <p>Tipo: {tipo}</p>
    <p>Precio: ${precio}</p>
    <button onClick={onAgregarAlCarrito}>Agregar al Carrito</button>
    
  </div>
);

export default TarjetaEcommerce;
