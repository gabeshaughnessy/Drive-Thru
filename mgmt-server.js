const express = require('express');
const http = require('http');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const morgan = require('morgan');

app.use(cors());
app.use(morgan('combined'));
app.use(bodyParser.json());

app.post('/', function(req, res){
  const message = "Management has been notified of " + req.body.orders +" open orders.";
  res.json({"message": message});
});

const port = process.env.PORT || 3090
const server = http.createServer(app);
server.listen(port);

console.log('management server listening on: ',  port);
