import axios from 'axios';

export const CREATE_ORDER = 'create_order';
export const UPDATE_ORDER = 'update_order';
export const ADD_ITEM = 'add_item';
export const REMOVE_ITEM = 'remove_item';
export const NOTIFY_MANAGER = 'notify_manager';
export const CLEAR_NOTIFICATIONS = 'clear_notifications';

//create a new order
export function createOrder(id){
  const currentTime = new Date();
  const order = {
    id : id,
    items : {},
    total : 0,
    status : 'open',
    createdAt : currentTime
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

export function addItem(order, item){
  return {
    type: ADD_ITEM,
    payload: {order, item}
  }
}

export function removeItem(order, item){
  return {
    type: REMOVE_ITEM,
    payload: {order, item}
  }
}

export function notifyManager(orderCount){
  const request = axios.post('http://localhost:3090',{"orders" : orderCount });
  return {
    type: NOTIFY_MANAGER,
    payload: request
  }

}

export function clearNotifications(){
  return {
    type: CLEAR_NOTIFICATIONS
  }

}
