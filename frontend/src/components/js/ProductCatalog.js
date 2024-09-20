import React, { useEffect, useState } from 'react';
import '../css/ProductCatalog.css'; // Import CSS

// Giả lập dữ liệu sản phẩm (thay thế bằng API thực tế)
const mockProducts = [
    { ProductID: 1, ProductName: 'Laptop Asus', CategoryID: 1, SupplierID: 1, Quantity: 10, Price: 1500.00 },
    { ProductID: 2, ProductName: 'Laptop Lenovo', CategoryID: 1, SupplierID: 2, Quantity: 5, Price: 1400.00 },
    { ProductID: 3, ProductName: 'Laptop HP', CategoryID: 1, SupplierID: 3, Quantity: 8, Price: 1600.00 },
];

const ProductCatalog = () => {
    const [products, setProducts] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState({}); // Trạng thái cho các checkbox

    useEffect(() => {
        // Giả lập gọi API để lấy dữ liệu sản phẩm
        // Thay thế bằng API thực tế
        setProducts(mockProducts);
    }, []);

    const handleSelectAll = (event) => {
        const isChecked = event.target.checked;
        const newSelectedProducts = {};
        products.forEach(product => {
            newSelectedProducts[product.ProductID] = isChecked; // Đánh dấu tất cả checkbox
        });
        setSelectedProducts(newSelectedProducts);
    };

    const handleSelectProduct = (productID) => {
        setSelectedProducts(prevState => ({
            ...prevState,
            [productID]: !prevState[productID], // Đảo ngược trạng thái checkbox
        }));
    };

    return (
        <div className="product-catalog-container">
            <h2>Danh Mục Sản Phẩm</h2>
            <div className='flex-supplier'>
            <table>
                <thead>
                    <tr>
                        <th>
                            <input 
                                type='checkbox' 
                                onChange={handleSelectAll} 
                                checked={Object.keys(selectedProducts).length === products.length && products.every(product => selectedProducts[product.ProductID])}
                            />
                        </th>
                        <th>Product ID</th>
                        <th>Tên Sản Phẩm</th>
                        <th>Danh Mục ID</th>
                        <th>Nhà Cung Cấp ID</th>
                        <th>Số Lượng</th>
                        <th>Giá</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.ProductID}>
                            <td>
                                <input 
                                    type='checkbox' 
                                    checked={selectedProducts[product.ProductID] || false} 
                                    onChange={() => handleSelectProduct(product.ProductID)} 
                                />
                            </td>
                            <td>{product.ProductID}</td>
                            <td>{product.ProductName}</td>
                            <td>{product.CategoryID}</td>
                            <td>{product.SupplierID}</td>
                            <td>{product.Quantity}</td>
                            <td>{product.Price.toFixed(2)} VNĐ</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='function-supplier'>
                <button>Thêm</button>
                <button>Sửa</button>
                <button>Xóa</button>
            </div>
            </div>
        </div>
    );
};

export default ProductCatalog;
