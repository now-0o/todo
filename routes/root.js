const express = require('express');
const router = express.Router();

const { index  } = require('../controllers/root');

router.get('^\/$|index(.html)?', index);

module.exports = router;