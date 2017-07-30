import axios from 'axios';
import config from '../../config';

export const CREATE_ORDER = 'create_order';
export const UPDATE_ORDER = 'update_order';
export const ADD_ITEM = 'add_item';
export const REMOVE_ITEM = 'remove_item';
export const NOTIFY_MANAGER = 'notify_manager';

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
  let warning = false;
  const threshold = config.threshold || 4
  if(orderCount > threshold){
    warning = true;
  }
  else if(orderCount <= threshold){
    warning = false;
  }
  const url = (config.mgmt_server_host || "http://localhost") + ':' + (config.mgmt_server_port || "3090");
  const request = axios.post(url,{"orders" : orderCount, "warning" : warning });
  return {
    type: NOTIFY_MANAGER,
    payload: request
  }

}
