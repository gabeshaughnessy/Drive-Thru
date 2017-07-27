export const CREATE_ORDER = 'create_order';
export const CANCEL_ORDER = 'cancel_order';
export const FULFILL_ORDER = 'fulfill_order';
export const VIEW_ORDER = 'view_order';
export const ADD_ITEM = 'add_item';
export const REMOVE_ITEM = 'remove_item';

//create a new order
export function createOrder(id){
  const order = {
    id : id,
    items : [],
    total : 0,
    status : 'open'
  }
  return {
    type : CREATE_ORDER,
    payload: order
  }
}

//delete an order
export function cancelOrder(order){

  order.status = 'canceled';

  return {
    type: CANCEL_ORDER,
    payload : order
  }
}

//fulfill an order
export function fulfillOrder(order){

  order.status = 'fulfilled';

  return {
    type: FULFILL_ORDER,
    payload : order
  }
}
//add an item to an order

//remove an item from an order
