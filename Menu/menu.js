
const categoryButtons = document.querySelectorAll('.side-button');
const foodCards = document.querySelectorAll('.food-card');

categoryButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        const currentActive = document.querySelector('.side-button.active');
        if (currentActive) {
            currentActive.classList.remove('active');
        }
        button.classList.add('active');

        const selectedCategory = button.textContent.trim().toLowerCase();

        foodCards.forEach(function(card) {
            if (card.classList.contains(selectedCategory)) {
                card.style.display = 'flex'; 
            } else {
                card.style.display = 'none'; 
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const savedRestaurant = localStorage.getItem('selectedRestaurant');
    if (savedRestaurant) {
        const title = document.getElementById('restaurant-title');
        if (title) {
            title.textContent = savedRestaurant;
        }
    }
});

const bookTableBtn = document.querySelector('.book-table-btn');
if (bookTableBtn) {
    bookTableBtn.addEventListener('click', function() {
        window.location.href = '../Booking/Table.html';
    });
}

