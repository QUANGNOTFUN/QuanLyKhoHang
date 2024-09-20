import React, { useState } from 'react';
import '../css/Home.css';
import Dashboard from './Dashboard';
import AddProduct from './AddProduct'; // Import component thêm sản phẩm
import ProductList from './ProductList'; // Import component danh sách sản phẩm

function Home() {
    const [activePage, setActivePage] = useState('home'); // Trạng thái trang hiện tại
    const [products, setProducts] = useState([]); // Danh sách sản phẩm

    const handleItemClick = (item) => {
        setActivePage(item); // Cập nhật trang hiện tại
    };

    const addProduct = (product) => {
        setProducts([...products, product]); // Thêm sản phẩm vào danh sách
        setActivePage('product-list'); // Chuyển sang trang danh sách sản phẩm
    };

    return (
        <div className="home-container">
            <header className='header'>
                QUẢN LÝ KHO HÀNG
            </header>

            <div className='main'>
                <nav className="sidebar">
                    <ul>
                        <li 
                            className={activePage === 'home' ? 'active' : ''} 
                            onClick={() => handleItemClick('home')}
                        >
                            Tổng quan kho hàng
                        </li>
                        <li 
                            className={`dropdown ${activePage === 'product-list' ? 'active' : ''}`} 
                            onClick={() => handleItemClick('product-list')}
                        >
                            Danh sách sản phẩm
                            <div className='dropdown-li'>
                                <button>Laptop Asus</button>
                                <button>Laptop Lenovo</button>
                                <button>Laptop HP</button>
                            </div>
                        </li>
                        <li 
                            className={activePage === 'orders' ? 'active' : ''} 
                            onClick={() => handleItemClick('orders')}
                        >
                            Đơn đặt hàng
                        </li>
                        <li onClick={() => handleItemClick('add-product')}>
                            Thêm Sản Phẩm
                        </li>
                    </ul>
                </nav>

                <div className="content">
                    {activePage === 'home' && <Dashboard />}
                    {activePage === 'product-list' && <ProductList products={products} />}
                    {activePage === 'orders' && <h1>Báo Cáo</h1>}
                    {activePage === 'add-product' && <AddProduct onAddProduct={addProduct} />}
                    
                </div>
            </div>
        </div>
    );
}

export default Home;
