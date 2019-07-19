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

api.post('/todo', (req, res) => {
  let data = req.body;
  data.timestamp =Date.now();
  database.insert(data);
  res.sendStatus(200);
});

api.listen(8000,(err) => {
  if(err) throw err;
  console.log('API running ..');
})