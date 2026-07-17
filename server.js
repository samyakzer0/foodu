const express = require('express');
const path = require('path');
const app = express();

app.use('/images', express.static(path.join(__dirname, 'public', 'images')));
app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'User', 'user.html'));
});

app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'Admin', 'admin.html'));
});

app.get('/special', (req, res) => {
    res.sendFile(path.join(__dirname, 'Special', 'special.html'));
});

app.get('/table', (req, res) => {
    res.sendFile(path.join(__dirname, 'Booking', 'Table.html'));
});

app.get('/menu', (req, res) => {
    res.sendFile(path.join(__dirname, 'Menu', 'menu.html'));
});

app.get('/listings', (req, res) => {
    res.sendFile(path.join(__dirname, 'Listings', 'listings.html'));
});

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'SignUp', 'Signup.html'));
});

app.get('/checkout', (req, res) => {
    res.sendFile(path.join(__dirname, 'Checkout', 'checkout.html'));
});

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});