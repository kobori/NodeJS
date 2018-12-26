var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

// rota princioal da aplicação - operação de consulta
router.get('/', (req, res, next) => {
  mongoose.model('Musica').find().then((musicas) => {
    res.render('index', {
      musicas: musicas
    })
  },next);
});

// Rota de cadastro, que recebe os dados - Inserção de dados
router.get('/add', (req, res, next) => {
  res.render('add');
});

// Rota de cadastro, que recebe e insere no baca de dados
router.post('/', (req, res, next) => {
  var Musica = mongoose.model('Musica');
  var m = new Musica(req.body);

  m.save().then((result) => {
    res.redirect('/');
  },next);
});

// Rota de edição de dados
router.get('/edit/:id', (req, res, next) => {
  const {id} = req.params;
  mongoose.model('Musica').findOne({_id: id}).then((musica) => {
    res.render('edit.njk', {
      musica: musica});
  },next);
});

// Rota de alteração 
router.put('/edit/:id', (req, res, next) => {
  const {id} = req.params;
  mongoose.model('Musica').update({ _id: id },
    {
      $set: {
      nome: req.body.nome,
      artista: req.body.artista,
      estrelas: req.body.estrelas
      }
    }).then((musica) => {
      res.redirect('/');
  },next);
});

// Rota de exclução
router.delete('/delete/:id', (req, res, next) => {
  const {id} = req.params;
  mongoose.model('Musica').remove({_id: id}).then((musica) => {
    res.redirect('/');
    },next);
});

module.exports = router;