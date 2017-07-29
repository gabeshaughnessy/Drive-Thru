# Drive-Thru
A Drive Through Ordering System

### Requirements
1. Create a visual menu where the drive-thru employee can select menu items to build the order and then send the order to the cooks.
2. Handle a case where someone has decided to change their order once they get to the window.
3. Handle a case where someone has decided to cancel an order once they get to the window.
4. Have a way to view current open orders and then close them when they're handed to our happy customers.
5. Alert the manager when the total number of open orders goes above 4.

### Installation:
Clone this directory, then do
```
npm install

```
To run the app, do
```
npm start
```
To test the app, do
```
npm run test
```
You can test during development by running
```
npm run test:watch
```

### App Model:
```
{
  orders : {
    id: {
      id: String,
      total : Number,
      status : String,
      items : {
        name: {
          name : String,
          price : Number,
          qty : Number
        }
      }
    }
  },
  menuItems : [
    {
      name : String,
      price : Number
    }
  ]
}
```

### TODO:
- [ ] update tests
- [ ] set up alerts to the manager
