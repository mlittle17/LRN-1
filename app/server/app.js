const express = require('express');
// const cors = require('cors');
const { routes } = require('./routes');

const app = express();

app.use(express.json());
// app.use(cors());
app.use('/', routes);

app.get('/', (req, res) => {
  res.send('This is from express.js');
});

module.exports = {
  app,
};