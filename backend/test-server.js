const express = require('express');
const app = express();

app.get('/receitas', (req, res) => {
  res.json([{ nome: 'Teste' }]);
});

app.listen(5000, () => console.log('Servidor rodando na porta 5000'));
