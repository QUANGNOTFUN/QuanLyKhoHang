import React, { useEffect, useState } from 'react';
import '../css/HistoryLog.css'; // Import CSS nếu cần

// Giả lập dữ liệu lịch sử chỉnh sửa (thay thế bằng API thực tế)
const mockHistoryLogs = [
    { LogID: 1, Action: 'Thêm', TableAffected: 'Sản phẩm', RecordID: 1, ActionDate: '2023-10-01 10:00:00', UserID: 1 },
    { LogID: 2, Action: 'Cập nhật', TableAffected: 'Nhà cung cấp', RecordID: 2, ActionDate: '2023-10-02 11:30:00', UserID: 2 },
    { LogID: 3, Action: 'Xóa', TableAffected: 'Đơn hàng', RecordID: 3, ActionDate: '2023-10-03 14:15:00', UserID: 3 },
];

const HistoryLog = () => {
    const [historyLogs, setHistoryLogs] = useState([]);
    const [filter, setFilter] = useState(''); // Trạng thái cho select box

    useEffect(() => {
        // Giả lập gọi API để lấy dữ liệu lịch sử chỉnh sửa
        // Thay thế bằng API thực tế
        setHistoryLogs(mockHistoryLogs);
    }, []);

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    // Lọc lịch sử dựa trên filter
    const filteredLogs = filter
        ? historyLogs.filter(log => log.Action === filter || log.TableAffected === filter)
        : historyLogs;

    return (
        <div className="history-log-container">
            <h2>Lịch Sử Chỉnh Sửa</h2>
            <div className="filter-container">
                <label htmlFor="filter">Lọc theo:</label>
                <select id="filter" value={filter} onChange={handleFilterChange}>
                    <option value="">Tất cả</option>
                    <option value="Thêm">Thêm</option>
                    <option value="Cập nhật">Cập nhật</option>
                    <option value="Xóa">Xóa</option>
                    <option value="Sản phẩm">Sản phẩm</option>
                    <option value="Nhà cung cấp">Nhà cung cấp</option>
                    <option value="Đơn hàng">Đơn hàng</option>
                </select>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Log ID</th>
                        <th>Hành Động</th>
                        <th>Bảng Bị Ảnh Hưởng</th>
                        <th>ID Bản Ghi</th>
                        <th>Ngày Hành Động</th>
                        <th>User ID</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredLogs.map(log => (
                        <tr key={log.LogID}>
                            <td>{log.LogID}</td>
                            <td>{log.Action}</td>
                            <td>{log.TableAffected}</td>
                            <td>{log.RecordID}</td>
                            <td>{log.ActionDate}</td>
                            <td>{log.UserID}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default HistoryLog;
