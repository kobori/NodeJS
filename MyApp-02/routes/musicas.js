var express = require('express');
var router = express.Router();

var db = require('../db');

// rota princioal da aplicação
router.get('/', (req, res, next) => {
  res.render('index')
});

// Rota de cadastro, que recebe os dados
router.get('/add', (req, res, next) => {

});

// Rota de cadastro, que recebe e insere no baca de dados
router.put('/', (req, res, next) => {

});

// Rota de edição 
router.get('/edit/:id', (req, res, net) => {

});

// Rota de alteração 
router.put('/edit/:id', (req, res, next) => {

});

// Rota de exclução
router.delete('delete/:id', (req, res, next) => {

});

module.exports = router;