var express = require('express');
var router = express.Router();
const apiCrown2Controller_78 = require('../controllers/apiCrown2Controller_78');

/* GET home page. */
router.get('/category_78', apiCrown2Controller_78.getCategories);

module.exports = router;