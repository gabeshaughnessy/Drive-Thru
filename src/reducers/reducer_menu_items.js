import config from '../../config';
export default function(state=[], action){
  if(config.menu_items.length > 0){
    return config.menu_items
  }
  //default menu items if you are lazy
  return [
    {name: 'Burger', price: 2.25},
    {name: 'Cheeseburger', price: 2.25},
    {name: 'Salad', price: 2.5},
    {name: 'Fries', price: 2.5},
    {name: 'Fountain Drink', price: 2.5},
    {name: 'Milk Shake', price: 4}
  ]
}
