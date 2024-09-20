const express = require('express');
const db = require('./db'); // Kết nối với db.js

const app = express();
const PORT = process.env.PORT || 5000;

// Route cơ bản
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

// Route mẫu
app.get('/data', (req, res) => {
    db.query('SELECT * FROM your_table_name', (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(results);
    });
});

// Lắng nghe trên cổng
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
