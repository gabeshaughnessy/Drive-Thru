import {CREATE_ORDER, CANCEL_ORDER, FULFILL_ORDER, ADD_ITEM} from '../actions';
import update from 'immutability-helper';

export default function(state=[], action){
  switch (action.type){
    case CREATE_ORDER :
      return [ ...state, action.payload];
    break;

    case CANCEL_ORDER :
      return state = state.map((order)=>{
        if(order.id !== action.payload.id){
          return order;
        }else{
          order.status = 'iscanceled';
          return order;
        }
      })
    break;

    case FULFILL_ORDER :
    return state = state.map((order)=>{
      if(order.id !== action.payload.id){
        return order;
      }else{
        order.status = 'fulfilled';
        return order;
      }
    })
    break;

    case ADD_ITEM :
      const item = action.payload.item;
      const orderID = action.payload.order.id;
      return state.map((order)=>{

        if(order.id === orderID){
          return update(order, {items : {$push : [item]}});
        }else{
          return order;
        }

      });

    break;

  }
  return state;
}
