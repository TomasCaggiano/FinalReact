import React from 'react';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import Footer from './components/Footer/Footer';
import { CartProvider } from './Components/CartContext';
import Cart from './Components/Cart/Cart';
import Checkout from './Components/Checkout/Checkout'

function App() {


  return (
    <BrowserRouter>
    <CartProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path='/categpry' element={<ItemListContainer />} />
        <Route path='/cart' element={ <Cart /> }/>
        <Route path='/item/:id' element={<ItemDetailContainer />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
      <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;