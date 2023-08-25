const express = require('express');
const userCon = require('../controllers/userCon')
const router = express.Router();

router.get('/', userCon.index);

module.exports = router;