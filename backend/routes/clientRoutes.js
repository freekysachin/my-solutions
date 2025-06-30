const express = require('express')
const {listClients} = require('../controller/clientController')
// controller import

const router = express.Router();

// http methods here 
router.get('/list-clients', listClients)

module.exports = router;