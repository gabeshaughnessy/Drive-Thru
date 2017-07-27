import {CREATE_ORDER} from '../actions';

export default function(state=[], action){
  switch (action.type){
    case CREATE_ORDER :
    return [ ...state, action.payload]
  }
  return state;
}
