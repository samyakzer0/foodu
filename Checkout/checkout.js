
const upiForm = document.getElementById("UPIForm");
const payButton = document.querySelector(".pay-btn");

upiForm.addEventListener("submit", function(submitEvent) {
    submitEvent.preventDefault();
    const upiInput = document.getElementById("upi-id");
    const upiValue = upiInput.value.trim();
    const emailInput = document.getElementById("email");
    const emailValue = emailInput.value.trim();
    if (upiValue === "" || emailValue === "") { 
        alert("Please fill in both your UPI ID and Email ID");
        return;
    }

    payButton.disabled = true;
    payButton.textContent = "Processing Payment...";

    const savedTable = localStorage.getItem('selectedTable');
    const savedTime = localStorage.getItem('selectedTime');
    const savedDeposit = localStorage.getItem('depositAmount');
    const savedRestaurant = localStorage.getItem('selectedRestaurant');

    fetch('/api/bookings', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            restaurant: savedRestaurant,
            table_no: savedTable,
            time_slot: savedTime,
            deposit_amount: savedDeposit,
            upi_id: upiValue,
            user_email: emailValue
        })
    })
    .then(response => {
        if (!response.ok) {
            return response.json().then(err => { throw new Error(err.error || 'Booking failed'); });
        }
        return response.json();
    })
    .then(data => {
        alert(data.message || "Payment Successful! Booking Confirmed.");
        localStorage.removeItem('selectedTable');
        localStorage.removeItem('selectedTime');
        localStorage.removeItem('depositAmount');
        localStorage.removeItem('selectedRestaurant');
        window.location.href = "/admin";
    })
    .catch(err => {
        alert(err.message || "Something went wrong.");
        payButton.disabled = false;
        payButton.textContent = "Pay & Confirm Booking";
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const savedTable = localStorage.getItem('selectedTable');
    const savedTime = localStorage.getItem('selectedTime');
    const savedDeposit = localStorage.getItem('depositAmount');
    const savedRestaurant = localStorage.getItem('selectedRestaurant');

    if (savedTable) {
        document.getElementById('summary-table').textContent = savedTable;
    }
    if (savedTime) {
        document.getElementById('summary-time').textContent = savedTime;
    }
    if (savedDeposit) {
        document.getElementById('summary-deposit').textContent = savedDeposit;
    }
    if (savedRestaurant) {
        document.getElementById('summary-restaurant').textContent = savedRestaurant;
    }
});


