const mongoose = require("mongoose");

const connection = mongoose.createConnection('mongodb://localhost:27017/todo').on('open', () => {
    console.log('Connected to MongoDB');
}).on('error', (err) => {
    console.log("MongoDB connection error: " + err);
});

module.exports = connection;