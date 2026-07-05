
const searchInput = document.querySelector('.search input');
const orderItems = document.querySelectorAll('.recent-orders-list li');

searchInput.addEventListener('input', function() {
    const filterText = searchInput.value.toLowerCase();
    
    orderItems.forEach(item => {
        const orderText = item.textContent.toLowerCase();
        if (orderText.includes(filterText)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
});

orderItems.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('completed');
    });
    item.addEventListener('dblclick', () => {
        item.remove();
    });
});

const bookingsData = {
    "2026-07-05": [
        { table: "T3", time: "7:00 PM", status: "Confirmed" },
        { table: "T1", time: "8:00 PM", status: "Confirmed" }
    ],
    "2026-07-06": [
        { table: "T2", time: "6:00 PM", status: "Confirmed" },
        { table: "T3", time: "9:00 PM", status: "Confirmed" }
    ],
    "2026-07-07": [
        { table: "T1", time: "6:00 PM", status: "Confirmed" }
    ]
};

const dateSelect = document.getElementById('date');
const bookingsTable = document.getElementById('bookings-table');

dateSelect.addEventListener('change', function() {
    const selectedDate = dateSelect.value;
    const bookings = bookingsData[selectedDate] || [];

    let data = '';
    bookings.forEach(booking => {
        data += `<tr class="booking-row">
            <td><strong>Table ${booking.table}</strong></td>
            <td>${booking.time}</td>
            <td class="status-text">${booking.status}</td>
         </tr>`;
    });
    bookingsTable.innerHTML = data;
});


