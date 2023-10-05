import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../../components/CartItem/CartItem';
import { Modal, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../stylization/css/style.css';
import mastercard from '../../stylization/icons/mastercard.png';
import visa from '../../stylization/icons/visa.png';


export default function CartPage({ cartItems, removeFromCart, increaseQuantity, decreaseQuantity }) {
  const [paymentInfo, setPaymentInfo] = useState({
    name: '',
    cardNumber: '',
    expirationDate: ''
  });

  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPaymentInfo(prevState => ({ ...prevState, [name]: value }));
  };

  const handleCheckout = () => {
    console.log('Informações de pagamento:', paymentInfo);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
    toast.error('Removido com sucesso', {
      position: "bottom-center",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  };

  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className='cart'>
      <br></br>
      <div className='carrinho'>
        <h2>Carrinho de Compras</h2>
        {cartItems.length > 0 ? (
          <ul>
            {cartItems.map(item => (
              <CartItem
                key={item.id}
                item={item}
                removeFromCart={handleRemoveFromCart}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
              />
            ))}
          </ul>
        ) : (
          <p>O carrinho está vazio.</p>
        )}
        <div class="total">
          <div class="order_total_content text-md-right">
            <div class="titulo_total">Total Final:</div>
            <div class="total_compra">R$ {getTotal().toFixed(2)}</div>
          </div>
        </div>
      </div>
      <br />

      <section class="checkout gradient-custom">
        <div class="container my-5 py-5">
          <div class="row d-flex justify-content-center py-5">
            <div class="col-md-7 col-lg-5 col-xl-4">
              <div class="card" style={{ borderradius: 15 }}>
                <div class="card-body p-4">
                  <form>
                    <div class="d-flex justify-content-between align-items-center mb-3">
                      <div class="form-outline">
                        <label class="form-label" for="typeText">Número do Cartão</label>
                        <input type="password" id="cardNumber" name="cardNumber" value={paymentInfo.cardNumber} onChange={handleInputChange} class="form-control form-control-lg" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;" style={{ size: 17, minlength: 19, maxlength: 19 }} />
                      </div>
                      <div className='bandeira'>
                      <img src={visa} alt="visa" style={{ width: 64 }} />
                      <img src={mastercard} alt="mastercard" style={{ width: 64 }} />
                      </div>
                    </div>

                    <div class="d-flex justify-content-between align-items-center mb-4">
                      <div class="form-outline">
                        <label class="form-label" for="typeName">Nome</label>
                        <input type="text" id="name" name='name' value={paymentInfo.name}
                          onChange={handleInputChange} class="form-control form-control-lg" placeholder="Nome" style={{ size: 17 }} />
                      </div>
                    </div>

                    <div class="d-flex justify-content-between align-items-center pb-2">
                      <div class="form-outline">
                      <label class="form-label" for="typeExp">Data de Expiração</label>
                        <input type="text" id="expirationDate" name="expirationDate" value={paymentInfo.expirationDate}
                          onChange={handleInputChange} class="form-control form-control-lg" placeholder="MM/YYYY" bid="exp"
                          style={{ size: 7, minlength: 7, maxlength: 7 }} />
                        
                      </div>
                      <div class="form-outline">
                      <label class="form-label" for="typeText2">CVV</label>
                        <input type="password" id="typeText2" class="form-control form-control-lg"
                          placeholder="&#9679;&#9679;&#9679;" style={{ size: 1, minlength: 3, maxlength: 3 }} />
                      </div>
                    </div>
                    <button onClick={handleCheckout} type="button" class="btn btn-success btn-lg ">Finalizar Compra</button>
                  </form>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Compra Finalizada</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Obrigado por sua compra!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>

      <Link to="/products"><button type="button" class="button cart_button_clear">Continar comprando</button></Link>
    </div>
  );
}
