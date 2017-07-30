module.exports = {
  restaraunt_name : "Your Restaraunt Name", //displays at the top of the POS app
  mgmt_server_port : 3090, //this is the port the management server will listen on
  mgmt_server_host : "http://localhost",
  threshold : 4, //if the number of open orders exceeds this, management will be notified
  menu_items : [{name: 'Burger', price: 2.25},
    {name: 'Cheeseburger', price: 2.25},
    {name: 'Salad', price: 2.5},
    {name: 'Fries', price: 2.5},
    {name: 'Fountain Drink', price: 2.5},
    {name: 'Milk Shake', price: 4}
  ]
}
