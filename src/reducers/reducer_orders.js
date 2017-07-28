import {CREATE_ORDER, UPDATE_ORDER, ADD_ITEM} from '../actions';
import update from 'immutability-helper';
import _ from 'lodash';

export default function(state={}, action){
  switch (action.type){
    case CREATE_ORDER :
      const orderID = action.payload.id;
      const newState = {};
      newState[orderID] = action.payload;
      return Object.assign({}, state, newState);
    break;

    case UPDATE_ORDER :
      return Object.keys(state).map((order)=>{
        if(state[order].id == action.payload.order.id){
          return Object.assign({}, state[order], {status : action.payload.status});
        }else{
          return state[order];
        }
      });
    break;

    case ADD_ITEM :
      const item = action.payload.item;
      return state.map((order)=>{

        if(order.id === action.payload.order.id){
          return update(order, {items : {$push : [item]}});
        }else{
          return order;
        }

      });

    break;

  }
  return state;
}
