import React, { useState } from 'react';
import './styles/styles.css';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import ShoppingCart from './components/ShoppingCart';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [productToEdit, setProductToEdit] = useState(null);

  const addProduct = (product) => {
    setProducts([...products, { ...product, id: products.length + 1 }]);
  };

  const updateProduct = (product) => {
    const updatedProducts = products.map((p) => (p.id === productToEdit.id ? product : p));
    setProducts(updatedProducts);
    setProductToEdit(null);
  };

  const handleDelete = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
  };

  const handleBuy = (product, quantity) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += quantity;
      if (existingItem.quantity <= 0) {
        // Hapus produk dari keranjang jika jumlah mencapai 0
        const updatedCart = cart.filter((item) => item.id !== product.id);
        setCart(updatedCart);
      } else {
        setCart([...cart]);
      }
    } else if (quantity > 0) {
      const newItem = { ...product, quantity };
      setCart([...cart, newItem]);
    }
  };

  const handleRemoveFromCart = (item) => {
    const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
    setCart(updatedCart);
  };

  const handleCheckout = () => {
    // Implementasi logika checkout di sini, seperti mengirim data pembelian ke server
    // Setelah checkout, reset keranjang belanja
    setCart([]);
  };

  const handleEdit = (product) => {
    setProductToEdit(product);
  };

  return (
    <div className="container">
      <div className="header">Aplikasi Belanja</div>
      <ProductList
        products={products}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        handleBuy={handleBuy}
      />
      <ProductForm
        addProduct={addProduct}
        updateProduct={updateProduct}
        productToEdit={productToEdit}
      />
      <ShoppingCart
        cart={cart}
        handleCheckout={handleCheckout}
        handleRemoveFromCart={handleRemoveFromCart}
      />
    </div>
  );
};

export default App;
