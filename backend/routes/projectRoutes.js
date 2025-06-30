const express = require('express')
const {listProjects} = require('../controller/projectController')
// controller import

const router = express.Router();

// http methods here 
router.get('/list-projects', listProjects)

module.exports = router;