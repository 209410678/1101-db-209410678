var express = require('express');
var router = express.Router();
const apiCrown2Controller_78 = require('../controllers/apiCrown2Controller_78');
const apiMidprojContentleft_78 = require('../controllers/midproj_78/apiMidProjContentleft_78');

/* crown_xx */
router.get('/category_78', apiCrown2Controller_78.getCategories);
router.get('/shop_78', apiCrown2Controller_78.getShop);
router.get('/shop_78/:category', apiCrown2Controller_78.getProductsByCategory);

/* midproj_xx */
router.get('/contentleft_78', apiMidprojContentleft_78.getContentleft);
/* finalproj_xx */

module.exports = router;
