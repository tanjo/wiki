var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var w = req.param('w');
  res.render('wiki', { title: w });
});

module.exports = router;
