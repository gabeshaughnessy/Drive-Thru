const express = require('express');
const http = require('http');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const morgan = require('morgan');
const config = require('./config');
const threshold = config.threshold || 4;

app.use(cors());
app.use(morgan('combined'));
app.use(bodyParser.json());

app.post('/', function(req, res){
  //this is where the management server could send out a message via bluetooth or sms
  //for now we are just pretending it is sending some sort of notification and returning a message.

  let message = '';
  let warning = req.body.warning;
  if(req.body.warning == true && req.body.orders > threshold){
    message = "Management has been notified of " + req.body.orders +" open orders.";
  }else if(req.body.orders >= threshold){
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

console.log('You may now use the P.O.S. app, the management server is listening on: ',  port);
