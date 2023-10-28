import React, { useState } from 'react';

const ProductForm = ({ addProduct, productToEdit }) => {
  const initialProductData = {
    name: '',
    price: '',
    quantity: 1,
  };

  const [formData, setFormData] = useState(productToEdit || initialProductData);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (formData.name.trim() === '') {
      newErrors.name = 'Nama produk wajib diisi';
      valid = false;
    }

    if (formData.price <= 0 || isNaN(formData.price)) {
      newErrors.price = 'Harga produk harus angka positif';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      if (productToEdit) {
        // Implementasi pembaruan produk
      } else {
        addProduct(formData);
      }
      setFormData(initialProductData);
    }
  };

  return (
    <div className="product-form">
      <h2>{productToEdit ? 'Edit Produk' : 'Tambah Produk'}</h2>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Nama Produk" />
      {errors.name && <p className="error-message">{errors.name}</p>}
      <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Harga Produk" />
      {errors.price && <p className="error-message">{errors.price}</p>}
      <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} placeholder="Jumlah Produk" />
      <button className="button-save" onClick={handleSubmit}>
        {productToEdit ? 'Simpan Perubahan' : 'Simpan'}
      </button>
    </div>
  );
};

export default ProductForm;
