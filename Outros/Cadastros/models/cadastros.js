var mongoose = require('mongoose');

var CadastroSchema = new mongoose.Schema({

  nome: {
    type: String,
    require: true
  },
  cidade: {
    type: String,
    require: true
  },
  telefone: {
    type: String,
    require: true
  },

});


module.exports = mongoose.model('Cadastro', CadastroSchema);