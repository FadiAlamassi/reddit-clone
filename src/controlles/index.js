const express = require('express');
const { home } = require('./home');

const router = express.Router();

router.get('/', home);

module.exports = router;
