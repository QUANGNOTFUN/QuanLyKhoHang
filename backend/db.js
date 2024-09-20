const mysql = require('mysql2');

// Tạo kết nối với MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Tên người dùng mặc định trong XAMPP
    password: '', // Mật khẩu mặc định là trống
    database: 'quanlykhohang' // Thay thế bằng tên cơ sở dữ liệu của bạn
});

// Kết nối đến CSDL
db.connect(err => {
    if (err) {
        console.error('Lỗi kết nối:', err);
    } else {
        console.log('Kết nối thành công với MySQL');
    }
});

module.exports = db; // Xuất kết nối để sử dụng ở nơi khác