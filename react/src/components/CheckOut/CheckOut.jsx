import React, { useContext, useState } from 'react';
import { CartContext } from '../CartContext/CartContext';
import { useForm } from 'react-hook-form';
import {db} from '../../main';
import './CheckOut.css';

const Checkout = () => {
    const {cart, totalPrice} = useContext(CartContext)
    const {register, handleSubmit} = useForm();
    const [pedidoId ,setPedidoId] = useState("");

    const comprar = (data) =>{
        const pedido = {
            cliente: data,
            productos: cart,
            total: totalPrice(),
        }
        console.log(pedido)
        const pedidosRef = collection(db, "pedidos");
        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id)
            })
    }

    if (pedidoId) {
        return(
            <div>
                <h1>¡Gracias por su compra!</h1>
                <img src="https://images.app.goo.gl/WmiULxcidyKWv7oGA" alt="compunentes" />
                <p className='mar' ><FaArrowRight />Aqui está el código de tu pedido: {pedidoId}</p>
                <br /><br /><br /><br />
            </div>
        )
    }

  return (
    <div>
        <h1>Completa este formulario antes de pagar:</h1>
        <form onSubmit={handleSubmit(comprar)}>
            <input className='Formulario' type="text" placeholder='Ingrese su nombre'{...register("nombre")}/>
            <input className='Formulario' type="email" placeholder='Ingrese su mail' {...register("mail")}/>
            <input className='Formulario' type="phone" placeholder='Ingrese su telefono' {...register("telefono")}/>
            <button className='botonComprar' type='submit'>Ir a Compra</button>

        </form>
    </div>
  )
}

export default Checkout