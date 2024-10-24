// app.js

const express = require('express');
const path = require('path');
const app = express();

// Middleware to handle static files and form data
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Set EJS as the template engine
app.set('view engine', 'ejs');

// Route for the homepage
const productRoutes = require('./routes/products');
app.use('/', productRoutes);

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
