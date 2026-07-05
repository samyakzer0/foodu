const categoryButtons = document.querySelectorAll('.side-button');
const restaurantCards = document.querySelectorAll('.food-card');

categoryButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        const currentActive = document.querySelector('.side-button.active');
        if (currentActive) {
            currentActive.classList.remove('active');
        }
        button.classList.add('active');
        const selectedCategory = button.textContent.trim().toLowerCase().replace(' ', '-');

        restaurantCards.forEach(function(card) {
            if (card.classList.contains(selectedCategory) || selectedCategory === 'specials') {
                card.style.display = 'flex'; 
            } else {
                card.style.display = 'none'; 
            }
        });
    });
});

restaurantCards.forEach(function(card) {
    card.addEventListener('click', function() {
        const restaurantName = card.querySelector('.food-name').textContent.trim();
        localStorage.setItem('selectedRestaurant', restaurantName);
        window.location.href = '../Menu/menu.html';
    });
});
