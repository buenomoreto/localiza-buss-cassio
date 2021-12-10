const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const models = require('./models');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const lembrete = models.Lembrete;

app.post('/insert', async (req, res) => {
  const insert = await lembrete.create({
    nome: req.body.nome,
    rua: req.body.rua,
    bairro: req.body.bairro,
    ref: req.body.ref,
    horarioChegada: req.body.horarioChegada,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  res.send(insert);
  res.end();
});
app.get('/query', async (req, res) => {
  const query = await lembrete.findAll({
    attributes: ['id', 'nome', 'rua', 'bairro', 'ref', 'horarioChegada'],
  });
  res.send(query);
});

app.post('/delete', async (req, res) => {
  const excluir = await lembrete.destroy({
    where: { id: req.body.id },
  });
  res.send('Excluido com sucesso!');
  res.end();
});

app.get('/', (req, res) => {
  res.send('servidor back end');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log('Servidor online'));
