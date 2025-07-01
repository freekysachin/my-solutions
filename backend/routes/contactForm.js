const express = require('express')
const { submitContactForm } = require('../controller/contactFormController')
// controller import

const router = express.Router();

// http methods here 
router.post('/contact-form', submitContactForm);

module.exports = router;