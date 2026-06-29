
const upiForm = document.getElementById("UPIForm");
const payButton = document.querySelector(".pay-btn");

upiForm.addEventListener("submit", function(submitEvent) {

    submitEvent.preventDefault();
    const upiInput = document.getElementById("upi-id");
    const upiValue = upiInput.value.trim();
    if (upiValue === "") { 
        alert("Please fill in your UPI ID.");
        return;
    }

    payButton.disabled = true;
    payButton.textContent = "Processing Payment...";

    

    setTimeout(function() {
        alert("Payment Successful! Thank you for your order.");

        payButton.textContent="Pay and Confirm Booking";
    }, 2000);


});
