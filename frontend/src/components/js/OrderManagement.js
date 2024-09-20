import React, { useEffect, useState } from 'react';
import '../css/OrderManagement.css'; // Import CSS nếu cần

// Giả lập dữ liệu đơn hàng (thay thế bằng API thực tế)
const mockOrders = [
    { OrderID: 1, ProductID: 1, Quantity: 2, OrderDate: '2023-10-01 10:00:00' },
    { OrderID: 2, ProductID: 2, Quantity: 1, OrderDate: '2023-10-02 11:30:00' },
    { OrderID: 3, ProductID: 3, Quantity: 5, OrderDate: '2023-10-03 14:15:00' },
];

const OrderManagement = () => {
    const [orders, setOrders] = useState([]);
    const [selectedOrders, setSelectedOrders] = useState({}); // Trạng thái cho các checkbox

    useEffect(() => {
        // Giả lập gọi API để lấy dữ liệu đơn hàng
        // Thay thế bằng API thực tế
        setOrders(mockOrders);
    }, []);

    const handleSelectAll = (event) => {
        const isChecked = event.target.checked;
        const newSelectedOrders = {};
        orders.forEach(order => {
            newSelectedOrders[order.OrderID] = isChecked; // Đánh dấu tất cả checkbox
        });
        setSelectedOrders(newSelectedOrders);
    };

    const handleSelectOrder = (orderID) => {
        setSelectedOrders(prevState => ({
            ...prevState,
            [orderID]: !prevState[orderID], // Đảo ngược trạng thái checkbox
        }));
    };

    return (
        <div className="order-management-container">
            <h2>Quản Lý Đơn Hàng</h2>
            <div className='flex-supplier'>
            <table>
                <thead>
                    <tr>
                        <th>
                            <input 
                                type='checkbox' 
                                onChange={handleSelectAll} 
                                checked={Object.keys(selectedOrders).length === orders.length && orders.every(order => selectedOrders[order.OrderID])}
                            />
                        </th>
                        <th>Order ID</th>
                        <th>Product ID</th>
                        <th>Số Lượng</th>
                        <th>Ngày Đặt Hàng</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <tr key={order.OrderID}>
                            <td>
                                <input 
                                    type='checkbox' 
                                    checked={selectedOrders[order.OrderID] || false} 
                                    onChange={() => handleSelectOrder(order.OrderID)} 
                                />
                            </td>
                            <td>{order.OrderID}</td>
                            <td>{order.ProductID}</td>
                            <td>{order.Quantity}</td>
                            <td>{order.OrderDate}</td>
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

export default OrderManagement;
