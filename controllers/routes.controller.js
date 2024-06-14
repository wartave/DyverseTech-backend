
const { Router} = require('express');
const { Route} = require('../models/Route.js');

const RoutesRouter = Router();


RoutesRouter.post('/routes', async (req, res) => {
    try {
      const { userId, startTime, status } = req.body;
      const route = await Route.create({ userId, startTime, status });
      res.json(route);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  RoutesRouter.get('/routes/:id', async (req, res) => {
    try {
      const route = await Route.findByPk(req.params.id);
      res.json(route);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  

  module.exports = {
    RoutesRouter
  };