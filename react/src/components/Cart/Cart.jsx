import React, { useContext } from 'react';
import { CartContext } from '../CartContext/CartContext';
import { Link } from 'react-router-dom';
import { ImBook } from "react-icons/im";
import './Cart.css';


const Cart = () => {
    const { cart, removeItem, clearCart } = useContext(CartContext);
    let totalPrice = 0;

    if (cart.length === 0) {
        return (
            <div >
                <h1 className='carritoVacio'>No hay elementos en el carrito</h1>
                <img id='gif' src='https://tenor.com/bJUBa.gif' alt="Mi GIF" />
            </div>

        );
    }
    

    return (
        <div>
            {cart.map(item => {
                const { id, title, price, quantity} = item;
                const itemTotalPrice = price * quantity;
                totalPrice = totalPrice + itemTotalPrice;
                return (
                    <div key={id}>
                        <div className='productoComprar'>
                            <ImBook size={50} className='verde'/>
                            <h3><u>{title}</u></h3>
                            <h4>Cantidad: {quantity}</h4>
                            <h4>Sub total: ${itemTotalPrice}</h4>
                            <button className='--bs-danger-border-subtle' onClick={() => removeItem(id)}>Eliminar producto</button>
                        </div>
                    </div>
                );
            })}
            <h2>Total: ${totalPrice}</h2>
            <button onClick={() => clearCart()}>Vciar carrito</button>
            <Link to='/checkout'><button>Finalizar la compra</button></Link>
        </div>
    );
}

export default Cart;