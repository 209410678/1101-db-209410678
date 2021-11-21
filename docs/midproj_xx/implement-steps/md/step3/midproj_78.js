var express = require('express');
var router = express.Router();
const midprojContentleft_78 = require('../controllers/midproj_78/midprojContentleft_78');
/* GET home page. */
router.get('/', midprojContentleft_78.getContentleft);

module.exports = router;
