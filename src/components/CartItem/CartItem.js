import React from 'react';

function CartItem({ item, removeFromCart, increaseQuantity, decreaseQuantity }) {
  const subtotal = item.price * item.quantity;

  return (
    <div class="cart_section">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="cart_container">
              <div class="cart_items">
                <ul class="cart_list">
                  <li class="cart_item clearfix">
                    <div class="cart_item_image"><img src={item.img} alt='Imagem do Produto' /></div>
                    <div class="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                      <div class="cart_item_name cart_info_col">
                        <div class="cart_item_title">Produto</div>
                        <div class="cart_item_text">{item.title}</div>
                      </div>
                      <div class="cart_item_quantity cart_info_col">
                        <div class="cart_item_title">Quantidade</div>
                        <div className='quant'>
                        <button className="mais" onClick={() => increaseQuantity(item.id)}>+</button>   
                        <div class="cart_item_text" style={{marginTop:12}}>{item.quantity}</div>
                        <button className="menos" onClick={() => decreaseQuantity(item.id)}>-</button>
                        </div>
                      </div>
                      <div class="cart_item_price cart_info_col">
                        <div class="cart_item_title">Preço</div>
                        <div class="cart_item_text">R$ {item.price}</div>
                      </div>
                      <div>
                        <button class="remove" onClick={() => removeFromCart(item.id)}>Remover</button>
                      </div>
                      <div class="cart_item_total cart_info_col">
                        <div class="cart_item_title">Subtotal</div>
                        <div class="cart_item_text">R$ {subtotal.toFixed(2)}</div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



export default CartItem;
