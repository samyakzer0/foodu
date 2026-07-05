
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

// Mock Booking Database
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

// Retrieve live reservation details from localStorage (if any exists)
const liveTable = localStorage.getItem('selectedTable');
const liveTime = localStorage.getItem('selectedTime');

if (liveTable && liveTime) {
    // Dynamically insert the user's booking into today's list!
    bookingsData["2026-07-05"].push({
        table: liveTable,
        time: liveTime,
        status: "Confirmed (New)"
    });
}

const dateSelect = document.getElementById('date');
const bookingDetails = document.getElementById('booking-details');

dateSelect.addEventListener('change', function() {
    const selectedDate = dateSelect.value;
    if (!selectedDate) {
        bookingDetails.innerHTML = '<p style="color: #666; font-style: italic;">Choose a date to view bookings...</p>';
        return;
    }

    const bookings = bookingsData[selectedDate] || [];
    if (bookings.length === 0) {
        bookingDetails.innerHTML = '<p style="color: #666;">No bookings for this date.</p>';
        return;
    }

    let html = '<ul style="list-style: none; padding: 0; margin-top: 10px; border-top: 1px solid #ddd;">';
    bookings.forEach(booking => {
        html += `<li style="padding: 10px 0; border-bottom: 1px solid #eee; display: flex; justify-content: space-between; font-size: 15px; color: #2b2b2b;">
            <span><strong>Table ${booking.table}</strong> &mdash; ${booking.time}</span>
            <span style="color: #c25d05; font-weight: bold;">${booking.status}</span>
        </li>`;
    });
    html += '</ul>';
    bookingDetails.innerHTML = html;
});

