var express = require('express');
var router = express.Router();
const crown2Controller_xx = require('../controllers/crown_xx/crown2Controller_xx');

/* GET home page. */
router.get('/', crown2Controller_xx.getCategories);
router.get('/shop_xx',crown2Controller_xx.getShop)
router.get('/shop_xx/:category',crown2Controller_xx.getProductsByCategory);


module.exports = router;
