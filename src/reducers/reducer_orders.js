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

      const orderItems = Object.keys(state).map((order)=>{

        if(state[order].id == action.payload.order.id){
          if(state[order].items.hasOwnProperty(action.payload.item.name)){
            const item = state[order].items[action.payload.item.name];
            const updatedQty = update(item, {qty :{$set : item.qty+1 }});
            const newItems = {};
            newItems[action.payload.item.name] = updatedQty;
            const updatedItems = update(state[order].items, {$merge : newItems});
            const newState = update(state[order], {items : {$merge : updatedItems}});
            return newState;
          }else{
            const newItem = {};
            const itemName = action.payload.item.name;
            newItem[itemName] = action.payload.item;
            newItem[itemName].qty = 1;

          const updatedItems = update(state[order], {items : {$merge : newItem }});

          const newState = Object.assign({}, state[order], updatedItems);
          return Object.assign({}, state[order], newState);
          }
        }else{
          return state[order];
        }
      });



      return orderItems;


    break;

  }
  return state;
}
