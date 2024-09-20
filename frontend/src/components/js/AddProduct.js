import React, { useState } from 'react';
import '../css/AddProduct.css';

function AddProduct({ onAddProduct }) {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productDescription, setProductDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct = { productName, productPrice, productDescription };
        onAddProduct(newProduct); // Gọi hàm để thêm sản phẩm
        // Reset form
        setProductName('');
        setProductPrice('');
        setProductDescription('');
    };

    return (
        <div className="add-product-container">
            <h2>Thêm Sản Phẩm</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Tên Sản Phẩm:</label>
                    <input
                        type="text"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Loại Sản Phẩm:</label>
                    <input
                        type="text"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Giá Sản Phẩm:</label>
                    <input
                        type="number"
                        value={productPrice}
                        onChange={(e) => setProductPrice(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Mô Tả Sản Phẩm:</label>
                    <textarea
                        value={productDescription}
                        onChange={(e) => setProductDescription(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Thêm Sản Phẩm</button>
            </form>
        </div>
    );
}

export default AddProduct;
