var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express', name: '鄭芷琳', id: '209410678' });
});

module.exports = router;
