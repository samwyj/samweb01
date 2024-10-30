document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');

    // Toggle sidebar visibility
    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });

    // Sample data to be inserted dynamically
    const phoneData = [
        { brand: 'Apple', model: 'iPhone 14 Pro', releaseYear: '2022', price: '$999' },
        { brand: 'Samsung', model: 'Galaxy S23', releaseYear: '2023', price: '$799' },
        { brand: 'Huawei', model: 'P50 Pro', releaseYear: '2021', price: '$899' },
        { brand: 'Xiaomi', model: 'Mi 13', releaseYear: '2023', price: '$599' },
        { brand: 'OPPO', model: 'Find X5', releaseYear: '2022', price: '$649' },
        { brand: 'Vivo', model: 'X90', releaseYear: '2023', price: '$699' },
        { brand: 'Honor', model: 'Magic5 Pro', releaseYear: '2023', price: '$749' }
    ];

    // Insert data into table
    const phoneTableBody = document.querySelector('#phoneTable tbody');
    phoneData.forEach(phone => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${phone.brand}</td>
            <td>${phone.model}</td>
            <td>${phone.releaseYear}</td>
            <td>${phone.price}</td>
        `;
        phoneTableBody.appendChild(row);
    });
});
