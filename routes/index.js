const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Amelia Eckton');
});

module.exports = routes;