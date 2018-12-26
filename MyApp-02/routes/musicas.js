var express = require('express');
var router = express.Router();

var db = require('../db');

// rota princioal da aplicação - operação de consulta
router.get('/', (req, res, next) => {
  db("musicas").then((musicas) =>{
    res.render('index', {
      musicas: musicas
    });
  },next);
});

// Rota de cadastro, que recebe os dados - Inserção de dados
router.get('/add', (req, res, next) => {
  res.render('add');
});

// Rota de cadastro, que recebe e insere no baca de dados
router.post('/', (req, res, next) => {
  db('musicas').insert(req.body).then((ids) => {
    res.redirect('/');
  },next);
});

// Rota de edição de dados
router.get('/edit/:id', (req, res, next) => {
  const {id} = req.params;

  db('musicas')
    .where('id', id)
    .first()
    .then((musica) => {
      if(!musica){
        return res.send(400);
      }

      res.render('edit.njk', {
        musica: musica 
      });
    },next);
});

// Rota de alteração 
router.put('/edit/:id', (req, res, next) => {
  const {id} = req.params;

  db('musicas')
    .where('id', id)
    .update(req.body)
    .then((result) => {
      if (result === 0) {
        return res.send(400);
      }

      res.redirect('/');
    },next);
});

// Rota de exclução
router.delete('/delete/:id', (req, res, next) => {
  const {id} = req.params;

  db('musicas')
    .where('id', id)
    .delete()
    .then((result) => {
      if(result === 0) {
        return res.send(400);
      } 
      res.redirect('/');
    },next);
});

module.exports = router;