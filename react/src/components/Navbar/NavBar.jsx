import React from 'react'
import { Link, NavLink } from "react-router-dom";
import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css';
export default function Navbar() {
  return (
    <header>
      <Link to="/">
        <img width={20} height={20} src="https://static.vecteezy.com/system/resources/previews/028/053/341/non_2x/set-of-online-shop-logo-designs-template-illustration-graphic-of-shopping-bag-computer-and-mouse-logo-perfect-for-ecommerce-sale-store-web-element-company-emblem-vector.jpg" />
      </Link>
      <nav>
        <NavLink to="/category/graficas">Graficas</NavLink>
        <NavLink to="/category/procesador">Procesadores</NavLink>
        <NavLink to="/category/ram">RAM</NavLink>
        <NavLink to="/Cart" className="carrito"><CartWidget /></NavLink>
      </nav>
    </header>
  );
}