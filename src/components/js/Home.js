import React, { useState } from 'react';
import '../css/Home.css';
import Dashboard from './Dashboard';
import AddProduct from './AddProduct'; // Import component thêm sản phẩm

function Home() {
    const [activePage, setActivePage] = useState('home'); // Trạng thái trang hiện tại

    const handleItemClick = (item) => {
        setActivePage(item); // Cập nhật trang hiện tại
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
                            className={`dropdown ${activePage === 'inventory' ? 'active' : ''}`} 
                            onClick={() => handleItemClick('inventory')}
                        >
                            Kiểm tra tồn kho
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
                    {activePage === 'home' && ( // Hiển thị Dashboard khi trang chủ được chọn
                        <Dashboard />
                    )}
                    {activePage === 'inventory' && (
                        <h1>Quản Lý Hàng Hóa</h1>
                    )}
                    {activePage === 'orders' && (
                        <h1>Báo Cáo</h1>
                    )}
                    {activePage === 'add-product' && ( // Hiển thị biểu mẫu thêm sản phẩm
                        <AddProduct />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Home;
