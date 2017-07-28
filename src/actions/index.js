export const CREATE_ORDER = 'create_order';
export const UPDATE_ORDER = 'update_order';
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

//delete or fulfill an order

export function updateOrder(order, status){
  return {
    type: UPDATE_ORDER,
    payload: {order, status}
  }
}


//add an item to an order

//remove an item from an order
