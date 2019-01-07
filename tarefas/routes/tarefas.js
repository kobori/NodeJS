var express = require('express');
var router = express.Router();
var passport = require('passport');
var isAuth = require('../middlewares/authorize').isAuth;
var db = require('../db');

// Rota da pagina inicial
router.get('/', function(req, res, next) {
	db("tarefas").then((tarefas)=> {
		res.render('index', {
			tarefas: tarefas,
			isAuth: req.isAuthenticated()
		})
	},next);
});

// Rota para cadastrar as tarefas 
router.get('/add', isAuth, (req,res,next)=>{
	res.render('add', {
		isAuth: req.isAuthenticated()
	})
});

// Rota que recebe dados de inserção de nova tarefas 
router.put('/add', isAuth, (req, res, next) => {
	db("tarefas").insert(req.body).then((ids) => {
		res.redirect('/');
	},next);
});

// Rota de edição das tarefas
router.get('/edit/:id', isAuth, (req,res,next)=>{
	const {id} = req.params;

	db("tarefas")
  	.where("id", id)
 		.first()
 		.then((tarefa) => {
 		if (!tarefa) {
 			 return res.send(400);
 		}

 		res.render("edit",{
 			tarefa: tarefa,
 		});
		isAuth: req.isAuthenticated()
  },next);
});

// Rota que receberá os dados alterados no banco de dados
router.put('/edit/:id', isAuth, (req,res,next)=>{
	const {id} = req.params;

	db("tarefas")
  	.where('id', id)
  	.update(req.body)
 		.then((result) => {
 			if (result === 0) {
 				return res.send(400);
 			}
 			res.redirect('/');	
 		},next);
});

// Rota de excluir
router.delete('/delete/:id', isAuth, (req,res,next)=>{
	const {id} = req.params;

	console.log("deltetando" + id);
 	db("tarefas")
 		.where('id', id)
 		.delete()
 		.then((result) => {
 			if (result === 0) {
 				return res.send(400);
 			}
 			res.redirect('/');
 		},next)
}); 		






module.exports = router;
