const express = require('express');
const http = require('http');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const morgan = require('morgan');
const config = require('./config');

app.use(cors());
app.use(morgan('combined'));
app.use(bodyParser.json());

app.post('/', function(req, res){
  let message = '';
  let warning = req.body.warning;
  if(req.body.warning == true && req.body.orders >= 5){
    message = "Management has been notified of " + req.body.orders +" open orders.";
  }else if(req.body.orders >= 4){
    warning = true;
    message = "Nice job getting caught up on orders!";
  }else{
    warning = false;
    message = "";
  }

  res.json({"message": message, "warning": warning, "orderCount": req.body.orders});
});

const port = config.mgmt_server_port || 3090
const server = http.createServer(app);
server.listen(port);

console.log('management server listening on: ',  port);
