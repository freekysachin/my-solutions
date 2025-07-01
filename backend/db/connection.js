const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_URI = process.env.MONGODB_URI;

const dbConnect = async ()=>{
    try {
        const connect = await mongoose.connect(MONGO_URI);
        console.log("DataBase Connected! ");
        
    } catch (error) {
        console.log("Database connection failed", error);
    }
}

module.exports = dbConnect;
