import {SELECT_ORDER } from '../actions';

export default function(state={}, action){

  switch (action.type) {
    case SELECT_ORDER:

      return action.payload;
      break;
    default:
      return state;
  }
}
