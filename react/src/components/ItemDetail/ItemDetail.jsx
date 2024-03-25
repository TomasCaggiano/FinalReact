import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Contador from '../Contador/Contador';
import'./ItemDetail.css';
const ItemDetail = ({ componente, cantidadAgregada, handleOnAdd }) => {
    return (
        <div className='detail'>
            <img className='imgDetail' src={componente.img} alt={componente.title} />
            <Card className='cardDetail' style={{ width: '28rem' }}>
                <Card.Body>
                    <Card.Title className='titulo'>{componente.title}</Card.Title>
                    <Card.Text>{componente.description}</Card.Text>
                    <Card.Text>Categoria: {componente.category}</Card.Text>
                    <Card.Text>Precio: ${componente.price}</Card.Text>
                    <Card.Text>Stock disponible: {componente.stock}</Card.Text>
                    {cantidadAgregada > 0 ? (
                        <Link to='/cart' className='terminarCompra'>Finalizar mi compra</Link>
                    ) : (
                        <Contador stock={componente.stock} onAdd={handleOnAdd} />
                    )}
                </Card.Body>
            </Card>
        </div>
    );
}

export default ItemDetail;