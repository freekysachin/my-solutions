// const multer = require('multer');
// const {v2: cloudinary} = require('cloudinary');

// const { CloudinaryStorage } = require('multer-storage-cloudinary');


const express = require('express');
require('dotenv').config();
const dbConnect = require('../db/connection.js');
const adminRoutes = require('../routes/adminRoutes.js');
const projectRoutes = require('../routes/projectRoutes.js')
const clientRoutes = require('../routes/clientRoutes.js')
const subscribeRoutes = require('../routes/subscribeRoutes.js')
const formRoutes = require('../routes/contactForm.js')
var cors = require('cors')

const serverless = require('serverless-http');


dbConnect()

const app = express();
app.use(express.json());
app.use(cors())

app.use('/api', projectRoutes);
app.use('/api', clientRoutes);
app.use('/api', subscribeRoutes)
app.use('/api',formRoutes )
// app.use('api/admin', adminRoutes);
app.get('/', (req,res)=>{
    res.send('welcome to the Backend API');
})

module.exports = app;
module.exports.handler = serverless(app)