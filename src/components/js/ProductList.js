import React from 'react';

function ProductList({ products }) {
    return (
        <div className="product-list-container">
            <h2>Danh Sách Sản Phẩm</h2>
            {products.length === 0 ? (
                <p>Chưa có sản phẩm nào được thêm.</p>
            ) : (
                <ul>
                    {products.map((product, index) => (
                        <li key={index}>
                            <h3>{product.productName}</h3>
                            <p>Giá: {product.productPrice} VNĐ</p>
                            <p>Mô Tả: {product.productDescription}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default ProductList;
