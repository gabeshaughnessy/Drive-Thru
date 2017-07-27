import {CREATE_ORDER, CANCEL_ORDER, FULFILL_ORDER} from '../actions';

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
          order.status = 'canceled';
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

  }
  return state;
}
