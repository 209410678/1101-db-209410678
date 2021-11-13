var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('midproj_78/theme_78', {
    title: 'Express',
    name: 'Hsingtai Chung',
    id: '123456789',
  });
});

module.exports = router;
