const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL);

mongoose.connection.on ('connected', () => {
    console.log('Connected to MongoDB');
}) 
mongoose.connection.on ('error', (err) => {
    console.log('Error connecting to MongoDB:', err);
})

module.exports = mongoose