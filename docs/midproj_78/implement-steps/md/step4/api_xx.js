var express = require('express');
var router = express.Router();
const apiCrown2Controller_xx = require('../controllers/apiCrown2Controller_xx');
const apiMidprojContentleft_78 = require('../controllers/midproj_78/apiMidProjContentleft_78');

/* crown_xx */
router.get('/category_xx', apiCrown2Controller_xx.getCategories);
router.get('/shop_xx', apiCrown2Controller_xx.getShop);
router.get('/shop_xx/:category', apiCrown2Controller_xx.getProductsByCategory);

/* midproj_xx */
router.get('/contentleft_78', apiMidprojContentleft_78.getContentleft);
/* finalproj_xx */

module.exports = router;
