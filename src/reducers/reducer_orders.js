import {CREATE_ORDER, UPDATE_ORDER, ADD_ITEM, REMOVE_ITEM} from '../actions';
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
          let newOrder = {};
          if(state[order].items.hasOwnProperty(action.payload.item.name)){
            const item = state[order].items[action.payload.item.name];
            const updatedQty = update(item, {qty :{$set : item.qty+1 }});
            const newItem = {};
            newItem[action.payload.item.name] = updatedQty;
            const updatedItems = update(state[order].items, {$merge : newItem});
            newOrder = update(state[order], {items : {$merge : updatedItems}});

          }else{
            const newItem = {};
            const itemName = action.payload.item.name;
            newItem[itemName] = action.payload.item;
            newItem[itemName].qty = 1;

            const updatedItems = update(state[order], {items : {$merge : newItem }});

            const newState = Object.assign({}, state[order], updatedItems);
            newOrder = Object.assign({}, state[order], newState);
          }
          const orderPrice = Object.keys(newOrder.items).map((item)=>{
            return newOrder.items[item].price * newOrder.items[item].qty;
          }).reduce((a, b) => a + b, 0);

          return update(newOrder, {total:{$set:orderPrice}});
        }else{
          return state[order];
        }
      });
      return orderItems;
    break;

    case REMOVE_ITEM :
      const removedItem = Object.keys(state).map((order)=>{
        if(state[order].id == action.payload.order.id){
          let newOrder = {};
          if(action.payload.item.qty > 1){
            //they have more than one of this item, just remove 1
            const item = state[order].items[action.payload.item.name];
            const updatedQty = update(item, {qty :{$set : item.qty-1 }});
            const newItem = {};
            newItem[action.payload.item.name] = updatedQty;
            const updatedItems = update(state[order].items, {$merge : newItem});
            newOrder = update(state[order], {items : {$merge : updatedItems}});

          }else{
            //they only have one of this item, remove it.
            const newItems = _.omit(state[order].items, action.payload.item.name);
            newOrder = update(state[order], {items: {$set: newItems}});
          }
          const orderPrice = Object.keys(newOrder.items).map((item)=>{
            return newOrder.items[item].price * newOrder.items[item].qty;
          }).reduce((a, b) => a + b, 0);

          return update(newOrder, {total:{$set:orderPrice}});
          return newOrder;
        }
        else{
          return state[order];
        }
      });
      return removedItem;

    break;

  }
  return state;
}
