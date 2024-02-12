import React, { useState } from 'react';
import './Destacados.css';

const Destacados = ({ onAgregarAlCarrito, onAgregarAFavoritos }) => {
  const destacadosItems = [
    { id: 1, nombre: 'Destacado 1', descripcion: 'Descripción del Destacado 1', precio: 19.99 },
    { id: 2, nombre: 'Destacado 2', descripcion: 'Descripción del Destacado 2', precio: 25.99 },
    { id: 3, nombre: 'Destacado 3', descripcion: 'Descripción del Destacado 3', precio: 29.99 },
  ];

  return (
    <div className="destacados-container">
      <h2>Preparate para la temporada</h2>
      <div className="destacados-list">
        {destacadosItems.map((item) => (
          <div key={item.id} className="destacado-item">
            <h3>{item.nombre}</h3>
            <p>{item.descripcion}</p>
            <p>Precio: ${item.precio}</p>
            <button onClick={() => onAgregarAlCarrito(item)}>Agregar al Carrito</button>
            <button onClick={() => onAgregarAFavoritos(item)}>Agregar a Favoritos</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destacados;
