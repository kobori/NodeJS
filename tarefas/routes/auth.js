var express = require('express');
var router = express.Router();
var passport = require('passport');
var isNotAuth = require('../middlewares/authorize').isNotAuth;
var db = require('../db');

// Página de login, que pode ser feito apenas se o usuário não estiver autenticado
router.get('/login', isNotAuth, (req, res, next) => {
  res.render('login');
});

// Rota que redirecionará o usuário para a página inicial, caso suas credenciais estejam corretas
router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/error',
}));

// A rota subsequente encerra a sessão de um usuário autenticado
router.get('/logout', (req, res, next) => {
  req.session.destroy();
  res.redirect('/')
});

// Rota que retorna a página com o formulário de registro de novos usuários
router.get('/register', isNotAuth, (req, res, next) => {
  res.render('register');
});

// Rota que acessa apenas por usuários ainda não autendicados 

module.exports = router;
