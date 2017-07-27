# Drive-Thru
A Drive Through Ordering System

### Requirements
1. Create a visual menu where the drive-thru employee can select menu items to build the order and then send the order to the cooks. 
2. Handle a case where someone has decided to change their order once they get to the window. 
3. Handle a case where someone has decided to cancel an order once they get to the window. 
4. Have a way to view current open orders and then close them when they're handed to our happy customers. 
5. Alert the manager when the total number of open orders goes above 4. 

### App Model: 
```
{ 
  orders : [
    {
      id: String,
      total : Number,
      status : String,
      items : [{item}, {item}]
    }
  ],
  menuItems : [
    {
      name : String,
      price : Number
    }
  ]
}
```
### Wireframes
![orders wireframe](https://github.com/gabeshaughnessy/Drive-Thru/blob/master/wireframes/orders.jpg?raw=true)

![new order wireframe](https://github.com/gabeshaughnessy/Drive-Thru/blob/master/wireframes/new-order.jpg?raw=true)

![edit order wireframe](https://github.com/gabeshaughnessy/Drive-Thru/blob/master/wireframes/edit-order.jpg?raw=true)
