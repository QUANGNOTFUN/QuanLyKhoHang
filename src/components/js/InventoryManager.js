import React, { useState } from 'react';

function InventoryManager() {
    const [items, setItems] = useState([]);

    const addItem = (item) => {
        setItems([...items, item]);
    };

    return (
        <div>
            <h1>Qun lý kho hàng</h1>
            {/* Thêm giao diện để thêm và hiển thị hàng hóa */}
        </div>
    );
}

export default InventoryManager;
