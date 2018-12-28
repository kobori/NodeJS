var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('parcels/about', { title: 'Express' });
});

router.get('/services', function(req, res, next) {
  res.render('parcels/services', { title: 'Express' });
});

router.get('/blog', function(req, res, next) {
  res.render('parcels/blog', { title: 'Express' });
});

router.get('/contact', function(req, res, next) {
  res.render('parcels/contact', { title: 'Express' });
});

module.exports = router;
