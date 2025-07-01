const express = require('express')
const { subscribeNew } = require('../controller/subscribeController')
// controller import

const router = express.Router();

router.post('/subscribe-new', subscribeNew)


module.exports = router;