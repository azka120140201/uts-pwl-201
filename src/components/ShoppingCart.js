import React from 'react';

const ShoppingCart = ({ cart, handleCheckout, handleRemoveFromCart }) => {
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="shopping-cart">
      <h2>Keranjang Belanja</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index} className="shopping-cart-item">
            {item.name} - Jumlah: {item.quantity}
            <button className="button-delete-cart" onClick={() => handleRemoveFromCart(item)}>
              Hapus
            </button>
          </li>
        ))}
      </ul>
      <p>Total Harga Keranjang: {total}</p>
      {cart.length > 0 && (
        <button className="button-checkout" onClick={handleCheckout}>
          Checkout
        </button>
      )}
    </div>
  );
};

export default ShoppingCart;
