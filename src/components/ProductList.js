import React from 'react';

const ProductList = ({ products, handleDelete, handleEdit, handleBuy }) => {
  const total = products.reduce((acc, product) => acc + product.price, 0);

  return (
    <div className="product-list">
      <h2>Daftar Produk</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="product-list-item">
            {product.name} - {product.price}
            <input
              type="number"
              value={product.quantity || 1}
              onChange={(e) => handleBuy(product, parseInt(e.target.value))}
              placeholder="Jumlah Produk"
            />
            <button className="button-buy" onClick={() => handleBuy(product, 1)}>
              Beli
            </button>
            <button className="button-delete" onClick={() => handleDelete(product.id)}>
              Hapus
            </button>
            <button className="button-edit" onClick={() => handleEdit(product)}>
              Edit
            </button>
          </li>
        ))}
      </ul>
      <p>Total Harga Belanjaan: {total}</p>
    </div>
  );
};

export default ProductList;
