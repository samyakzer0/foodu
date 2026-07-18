
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

const dateSelect = document.getElementById('date');
const bookingsTable = document.getElementById('bookings-table');

let allBookings = [];

async function fetchBookings(){
    try {
        const res = await fetch('/api/bookings');
        const booking = await res.json();
        allBookings = booking;
        renderBookings();
    } catch (err) {
        console.error('Error fetching bookings:', err);
    }
}

function renderBookings() {
    const selectedDate = dateSelect.value;
    const bookings = allBookings.filter(booking => {
        if (!selectedDate) return true;
        const bookingDate = new Date(booking.createdAt).toISOString().split('T')[0];
        return bookingDate === selectedDate;
    });

    let data = '';
    bookings.forEach(booking => {
        data += `<tr class="booking-row">
            <td><strong>Table ${booking.table_no}</strong></td>
            <td>${booking.restaurant}</td>
            <td>${booking.email}</td>
            <td>${booking.time_slot}</td>
            <td class="status-text">${booking.status}</td>
         </tr>`;
    });
    bookingsTable.innerHTML = data || '<tr><td colspan="5" style="text-align:center;">No bookings found</td></tr>';
}

dateSelect.addEventListener('change', renderBookings);

document.addEventListener("DOMContentLoaded", fetchBookings);



