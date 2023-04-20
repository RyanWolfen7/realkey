require('dotenv').config();

const mongoose = require('mongoose');

const DATABASE_URL = process.env.DATABASE_URL;

const connectDB = () => {
    return mongoose.connect(DATABASE_URL, {useUnifiedTopology: true, useNewUrlParser: true} )
}

const db = mongoose.connection;

db.on('error', console.error.bind(console, "MongoDB connection failed"));

module.exports = connectDB;
