
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
