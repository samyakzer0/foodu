const express = require('express');
const dotenv = require('dotenv').config();
const {sequelize, Booking} = require('./models');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

app.post('/api/bookings',async(req,res)=>{
    try {
        const {restaurant,table_no,time_slot,deposit_amount,upi_id,user_email}=req.body;

        const booking = await Booking.create({
            restaurant,
            table_no,
            time_slot,
            deposit_amount,
            upi_id,
            email:user_email,
        });

        res.status(201).json({message:"Booking created successfully",booking});
    } catch (err) {
        console.error("Error creating booking:", err);
        res.status(500).json({ error: err.message || "Failed to create booking" });
    }
})

app.get('/api/bookings',async(req,res)=>{
    try {
        const bookings = await Booking.findAll({
            order: [['createdAt', 'DESC']]
        });
        res.json(bookings);
    } catch (err) {
        console.error("Error fetching bookings:", err);
        res.status(500).json({ error: "Failed to fetch bookings" });
    }
})


sequelize.sync().then(()=>{ 
    console.log('Hittt');
    app.listen(4000,()=>{
        console.log("Server running on 4000");
    })  
})
.catch((err)=>{
    console.log(err);
});