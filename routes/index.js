var express = require('express');
var router = express.Router();
var path = require('path');
var bodyParser = require('body-parser');


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Kapoorz App' });
});

module.exports = router;
