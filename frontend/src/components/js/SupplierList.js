import React, { useEffect, useState } from 'react';
import '../css/SupplierList.css'; // Import CSS nếu cần

// Giả lập dữ liệu nhà cung cấp (thay thế bằng API thực tế)
const mockSuppliers = [
    { SupplierID: 1, SupplierName: 'Nhà Cung Cấp A', ContactInfo: '0123456789' },
    { SupplierID: 2, SupplierName: 'Nhà Cung Cấp B', ContactInfo: '0987654321' },
    { SupplierID: 3, SupplierName: 'Nhà Cung Cấp C', ContactInfo: '0912345678' }, 
];

const SupplierList = () => {
    const [suppliers, setSuppliers] = useState([]);
    const [selectedSuppliers, setSelectedSuppliers] = useState({}); // Trạng thái cho các checkbox

    useEffect(() => {
        // Giả lập gọi API để lấy dữ liệu nhà cung cấp
        // Thay thế bằng API thực tế
        setSuppliers(mockSuppliers);
    }, []);

    const handleSelectAll = (event) => {
        const isChecked = event.target.checked;
        const newSelectedSuppliers = {};
        suppliers.forEach(supplier => {
            newSelectedSuppliers[supplier.SupplierID] = isChecked; // Đánh dấu tất cả checkbox
        });
        setSelectedSuppliers(newSelectedSuppliers);
    };

    const handleSelectSupplier = (supplierID) => {
        setSelectedSuppliers(prevState => ({
            ...prevState,
            [supplierID]: !prevState[supplierID], // Đảo ngược trạng thái checkbox
        }));
    };

    return (
        <div className="supplier-list-container">
            <h2>Danh Sách Nhà Cung Cấp</h2>
            <div className='flex-supplier'>
            <table className='content-supplier'>
                <thead>
                    <tr>
                        <th>
                            <input 
                                type='checkbox' 
                                onChange={handleSelectAll} 
                                checked={Object.keys(selectedSuppliers).length === suppliers.length && suppliers.every(supplier => selectedSuppliers[supplier.SupplierID])}
                            />
                        </th>
                        <th>Supplier ID</th>
                        <th>Tên Nhà Cung Cấp</th>
                        <th>Thông Tin Liên Hệ</th>
                    </tr>
                </thead>
                <tbody>
                    {suppliers.map(supplier => (
                        <tr key={supplier.SupplierID}>
                            <td>
                                <input 
                                    type='checkbox' 
                                    checked={selectedSuppliers[supplier.SupplierID] || false} 
                                    onChange={() => handleSelectSupplier(supplier.SupplierID)} 
                                />
                            </td>
                            <td>{supplier.SupplierID}</td>
                            <td>{supplier.SupplierName}</td>
                            <td>{supplier.ContactInfo}</td>
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

export default SupplierList;
