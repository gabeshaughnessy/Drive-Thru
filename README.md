# Drive-Thru
A Drive Through Ordering System

### Requirements
1. Create a visual menu where the drive-thru employee can select menu items to build the order and then send the order to the cooks.
2. Handle a case where someone has decided to change their order once they get to the window.
3. Handle a case where someone has decided to cancel an order once they get to the window.
4. Have a way to view current open orders and then close them when they're handed to our happy customers.
5. Alert the manager when the total number of open orders goes above 4.

#### Installation:
Clone this directory, then do
```
npm install
```
#### Configuration
Next you need to set up your config file. This has the settings for your management server as well as your restaurant settings. This is also where you can add menu items and name your restaurant.

``` cp sample-config.js config.js ```

Edit `config.js` and make any necessary changes.

#### Running the Management Server
The management server handles notifications to the management, and must be running while the P.O.S. app is running.
To run the management server do
```
 node mgmt-server.js
```

#### Running the P.O.S. App
First make sure your management server is up and running, then to run the point of sale app open a new terminal window and do

```
npm start
```

The P.O.S. app is now running on port `8080`. Visit `http://localhost:8080` to start taking orders

#### Testing
To test the app, open a new terminal window and do
```
npm run test
```
You can test during development by running
```
npm run test:watch
```

#### App Model:
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
  ],
  notifications : {
    message : "String",
    warning : Boolean,
    orderCount : Number
  }
}
```
![app screenshot](https://github.com/gabeshaughnessy/Drive-Thru/blob/master/wireframes/app-screenshot.jpg?raw=true)

#### TODO:
- [ ] update tests
