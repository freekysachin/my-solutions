// const multer = require('multer');
// const {v2: cloudinary} = require('cloudinary');

// const { CloudinaryStorage } = require('multer-storage-cloudinary');


const express = require('express');
require('dotenv').config();
const dbConnect = require('./db/connection.js');
const adminRoutes = require('./routes/adminRoutes.js');
const projectRoutes = require('./routes/projectRoutes.js')
const clientRoutes = require('./routes/clientRoutes.js')


dbConnect()
const PORT = process.env.PORT || 4000;
const app = express();
app.use(express.json());

app.use('/api', projectRoutes);
app.use('/api', clientRoutes);
// app.use('api/admin', adminRoutes);

app.get('/', (req,res)=>{
    res.send(`server is running on PORT ${PORT}`);
})

app.listen(PORT, ()=>{
    console.log("ruuning");
    
})