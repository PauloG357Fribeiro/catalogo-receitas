const Receita = require('../models/Receita');

exports.getReceitas = async (req, res) => {
  try {
    const receitas = await Receita.find();
    res.json(receitas);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar receitas.' });
  }
};

exports.createReceita = async (req, res) => {
  try {
    const novaReceita = new Receita(req.body);
    const receitaSalva = await novaReceita.save();
    res.status(201).json(receitaSalva);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao salvar receita.' });
  }
};

exports.updateReceita = async (req, res) => {
  try {
    const receitaAtualizada = await Receita.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(receitaAtualizada);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao atualizar receita.' });
  }
};

exports.deleteReceita = async (req, res) => {
  try {
    await Receita.findByIdAndDelete(req.params.id);
    res.json({ mensagem: 'Receita removida com sucesso!' });
  } catch (error) {
    res.status(400).json({ error: 'Erro ao remover receita.' });
  }
};
