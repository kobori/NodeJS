var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/* GET home page. */
router.get('/', function(req, res, next) {
  mongoose.model('Cadastro').find().then((cadastros) => {
    res.render('index', {
      cadastros: cadastros
    })
  },next);
});

router.get('/add', function(req, res, next) {
  res.render('parcels/add', { title: 'Express' });
});

// Rota de cadastro, que recebe e insere no baca de dados
router.post('/', (req, res, next) => {
  var Cadastro = mongoose.model('Cadastro');
  var m = new Cadastro(req.body);

  m.save().then((result) => {
    res.redirect('/');
  },next);
});


router.delete('/delete/:id', (req, res, next) => {
  const {id} = req.params;
  mongoose.model('Cadastro').remove({_id: id}).then((cadastro) => {
    res.redirect('/');
    },next);
});



module.exports = router;
