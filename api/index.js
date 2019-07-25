const express = require('express');
const bodyParser = require('body-parser');
const Datastore = require('nedb');
const cors = require('cors');

const api = express();

const database = new Datastore('database.db');
database.loadDatabase();

api.use(cors({ origin: '*' }));
api.use(bodyParser.json());
api.use(bodyParser.urlencoded({extended: false}));

api.get('/todo', (req, res) => {
  database.find({}, (err, data) => {
    res.json(data);
  })
});

api.post('/todo', (req, res) => {
  let data = req.body;
  data.timestamp =Date.now();
  database.insert(data);
  res.sendStatus(200);
});

api.put('/todo/:id', (req, res) =>  {
  database.update({_id: req.params.id}, { $set: { "todo": req.body.todo, "explication": req.body.explication } }, (err, numRemoved) => {
    res.sendStatus(200);
  })
})

api.delete('/todo/:id', (req, res) => {
  database.remove({_id: req.params.id}, (err, numRemoved) => {
    res.sendStatus(200);
  })
})

api.listen(8000,(err) => {
  console.log('API running ..');
})