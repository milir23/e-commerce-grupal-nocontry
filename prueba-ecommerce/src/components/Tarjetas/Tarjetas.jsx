import React, { useState } from 'react';
import './Tarjetas.css';
import TarjetaEcommerce from './Datosdetarjetas.jsx';

const Tarjetas = () => {
    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (nombre) => {
        setCarrito([...carrito, nombre]);
    };

    const quitarDelCarrito = (nombre) => {
        const nuevoCarrito = carrito.filter((item) => item !== nombre);
        setCarrito(nuevoCarrito);
    };

    return (
        <div className="org">
            <div className="carrito">
                <h2>Carrito de Compras</h2>
                <ul>
                    {carrito.map((item, index) => (
                        <li key={index}>
                            {item}
                            <button onClick={() => quitarDelCarrito(item)}>Quitar del Carrito</button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="contenedor-ecommerce">
                <TarjetaEcommerce
                    nombre="Bicicleta"
                    tipo="Eléctrica"
                    precio="19.99"
                    onAgregarAlCarrito={() => agregarAlCarrito("Producto 1")}
                    onQuitarDelCarrito={() => quitarDelCarrito("Producto 1")}
                />
                <TarjetaEcommerce
                    nombre="Manubrio clásico"
                    tipo="Manubrios"
                    precio="25.99"
                    onAgregarAlCarrito={() => agregarAlCarrito("Producto 2")}
                    onQuitarDelCarrito={() => quitarDelCarrito("Producto 2")}
                />
                <TarjetaEcommerce
                    nombre="Asiento acolchado"
                    tipo="Asientos"
                    precio="39.99"
                    onAgregarAlCarrito={() => agregarAlCarrito("Producto 3")}
                    onQuitarDelCarrito={() => quitarDelCarrito("Producto 3")}
                />
                <TarjetaEcommerce
                    nombre="Llanta de bicicleta plegable"
                    tipo="Llantas"
                    precio="59.99"
                    onAgregarAlCarrito={() => agregarAlCarrito("Producto 4")}
                    onQuitarDelCarrito={() => quitarDelCarrito("Producto 4")}
                />
            </div>

            
        </div>
    );
};




export default Tarjetas;
