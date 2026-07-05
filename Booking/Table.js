const timeSlots = document.querySelectorAll('.time-option');
const button = document.querySelector('.confirm-btn');
const tables = document.querySelectorAll('.seating-arrangement');
const confirmButton = document.querySelector('.confirm-btn');

tables.forEach(function(tableLayout) {
   
    tableLayout.addEventListener('click', function() {
        
        
    
        const currentSelected = document.querySelector('.seating-arrangement.selected');

        if (currentSelected) {
            currentSelected.classList.remove('selected');
        }
        tableLayout.classList.add('selected');

         const tableName = tableLayout.querySelector('.table').textContent;
        document.querySelector('.selected-list .selected-table').textContent = tableName;
        localStorage.setItem('selectedTable', tableName);


    })
});

button.addEventListener('click', function() {
    window.location.href = '../Checkout/checkout.html';
});

timeSlots.forEach(function(slot) {
    slot.addEventListener('click', function() {
        const currentActive = document.querySelector('.time-option.active');
        if (currentActive) {
            currentActive.classList.remove('active');
        }
        slot.classList.add('active');
        const selectedTime = slot.textContent;
        localStorage.setItem('selectedTime', selectedTime); 
    });
});

confirmButton.addEventListener('click', function() {
    window.location.href = '../Checkout/checkout.html';
});