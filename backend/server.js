const express = require('express');
const db = require('./db'); // Kết nối với db.js
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // Cho phép CORS
app.use(express.json()); // Để xử lý JSON

// Route cơ bản
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

// Route kiểm tra kết nối
app.get('/test-connection', (req, res) => {
    db.query('SELECT 1 + 1 AS solution', (err, results) => {
        if (err) {
            return res.status(500).send('Lỗi kết nối đến CSDL');
        }
        res.json({ solution: results[0].solution });
    });
});

// Lắng nghe trên cổng
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
