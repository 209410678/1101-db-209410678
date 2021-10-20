var express = require('express');
var router = express.Router();
const crown2Controller_78 = require('../controllers/crow2Controller_78');

/* GET home page. */
router.get('/', crown2Controller_78.getCategories);

module.exports = router;