const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/my_solutions';

const dbConnect = async ()=>{
    try {
        const connect = await mongoose.connect(MONGO_URI);
        console.log("DataBase Connected! ");
        
    } catch (error) {
        console.log("Database connection failed", error);
        process.exit(1);
    }
}

module.exports = dbConnect;