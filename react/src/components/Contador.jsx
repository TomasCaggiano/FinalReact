import React, { useState, useEffect } from 'react';



const Contador = ({ stock, onAdd }) => {
    const [contador, setContador] = useState(1);

const sumar = () => {
    if (contador < stock) {
        setContador(prevContador => prevContador + 1);
    }
};

const restar = () => {
    if (contador > 1) {
        setContador(prevContador => prevContador - 1);
    }
};

const agregarAlCarrito = () => {
    if (onAdd) {
        onAdd(contador);
        
    }
};

useEffect(() => {
    if (stock === 0) {
        setContador(0);
    } else {
        setContador(1);
    }
}, [stock]);

return (
    <div className="contador-container">
      <div className="sumar-restar">
        <button className='borderRadius' onClick={restar} disabled={contador <= 1}> - </button>
        <h2 className='contador'>{contador}</h2>
        <button className='borderRadius' onClick={sumar} disabled={contador >= stock}> + </button>
      </div>
      <div className="agregar-carrito">
        <button className='borderRadius' onClick={agregarAlCarrito} disabled={stock === 0}>Agregar al Carrito</button>
      </div>
    </div>
  );
};

export default Contador;