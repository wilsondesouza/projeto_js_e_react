import React, { useReducer  } from 'react';
import HomePage from './pages/Home/HomePage';
import Products from './pages/Products/Products';
import CartPage from './pages/Carrinho/CartPage';
import Header from './partials/Header/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./partials/Footer/Footer";
import { ToastContainer } from 'react-toastify';
import { addToCartType, removeFromCartType, increaseQuantityType, decreaseQuantityType } from './store/types'
import reducer from './store/reducer';
import './stylization/css/index_light_n_dark.css';
import ThemeContext from './contexts/ThemeContext';

const initialState = {
  cartItems: []
};


function App() {

  const [state, dispatch] = useReducer(reducer, initialState);
  

  return (
    <BrowserRouter>
      <div className={`App`}>
        <ToastContainer position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover={false}
          theme="light" />
        <Header />
        <br></br>
        <ThemeContext />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path="/products" element={<Products addToCart={(product) => dispatch({ type: addToCartType, payload: product })} />} />
          <Route path="/cart" element={<CartPage cartItems={state.cartItems} removeFromCart={(productId) => dispatch({ type: removeFromCartType, payload: productId })} increaseQuantity={(productId) => dispatch({ type: increaseQuantityType, payload: productId })}
            decreaseQuantity={(productId) => dispatch({ type: decreaseQuantityType, payload: productId })} />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
