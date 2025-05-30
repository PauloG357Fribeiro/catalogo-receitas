const mongoose = require('mongoose');

const ReceitaSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  categoria: { type: String, required: true },
  descricao: { type: String, required: true },
  imagem: { type: String, required: true }
});

module.exports = mongoose.model('Receita', ReceitaSchema);
