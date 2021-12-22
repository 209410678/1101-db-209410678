var express = require('express');
var router = express.Router();
const crown2Controller_78 = require('../controllers/crown_78/crown2Controller_78');

router.post('/create',crown2Controller_78.createProducts);

/* GET home page. */
router.get('/', crown2Controller_78.getCategories);
router.get('/shop_78',crown2Controller_78.getShop)
router.get('/shop_78/:category',crown2Controller_78.getProductsByCategory);

router.post('/update',crown2Controller_78.updateProducts);

router.get('/delete/:id',crown2Controller_78.deleteProduct);

module.exports = router;
