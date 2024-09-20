import React from 'react';
import '../css/Dashboard.css'; // Nhập file CSS nếu cần

function Dashboard() {
    // Dữ liệu mẫu cho dashboard
    const totalProducts = 150; // Tổng số sản phẩm
    const totalOrders = 75; // Tổng số đơn hàng
    const lowStockProducts = 10; // Số sản phẩm sắp hết hàng

    return (
        <div className="dashboard-container">
            <header className="dashboard-header">
                <h1>Tổng Quan Kho Hàng</h1>
            </header>
            <div className="dashboard-stats">
                <div className="stat-card">
                    <h2>{totalProducts}</h2>
                    <p>Tổng Sản Phẩm</p>
                </div>
                <div className="stat-card">
                    <h2>{totalOrders}</h2>
                    <p>Tổng Đơn Hàng</p>
                </div>
                <div className="stat-card">
                    <h2>{lowStockProducts}</h2>
                    <p>Sản Phẩm Sắp Hết Hàng</p>
                </div>
            </div>
            {/* Có thể thêm biểu đồ hoặc danh sách sản phẩm ở đây */}
        </div>
    );
}

export default Dashboard;
