import React, { useState } from 'react';
import '../css/Home.css';
import Dashboard from './Dashboard';
import ProductCatalog from './ProductCatalog'; // Import component danh mục sản phẩm
import ProductList from './ProductList'; // Import component danh sách sản phẩm
import SupplierList from './SupplierList'; // Import component danh sách nhà cung cấp
import OrderManagement from './OrderManagement'; // Import component quản lý đơn hàng
import HistoryLog from './HistoryLog'; // Import component lịch sử chỉnh sửa

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
                            className={activePage === 'product-catalog' ? 'active' : ''} 
                            onClick={() => handleItemClick('product-catalog')} // Chuyển sang trang danh sách sản phẩm
                        >
                            Danh sách sản phẩm
                        </li>
                        <li 
                            className={activePage === 'supplier-list' ? 'active' : ''} 
                            onClick={() => handleItemClick('supplier-list')} // Chuyển sang trang danh sách nhà cung cấp
                        >
                            Danh sách nhà cung cấp
                        </li>
                        <li 
                            className={activePage === 'orders' ? 'active' : ''} 
                            onClick={() => handleItemClick('orders')}
                        >
                            Chi tiết đặt hàng
                        </li>
                        <li 
                            className={activePage === 'history-log' ? 'active' : ''}
                            onClick={() => handleItemClick('history-log')} // Chuyển sang trang lịch sử chỉnh sửa
                        >
                            Lịch sử chỉnh sửa
                        </li>
                    </ul>
                </nav>

                <div className="content">
                    {activePage === 'home' && <Dashboard />}
                    {activePage === 'product-catalog' && <ProductCatalog />} {/* Hiển thị ProductCatalog */}
                    {activePage === 'supplier-list' && <SupplierList />} {/* Hiển thị danh sách nhà cung cấp */}
                    {activePage === 'orders' && <OrderManagement />} {/* Hiển thị chi tiết đặt hàng */}
                    {activePage === 'history-log' && <HistoryLog />} {/* Hiển thị lịch sử chỉnh sửa */}
                </div>
            </div>
        </div>
    );
}

export default Home;
