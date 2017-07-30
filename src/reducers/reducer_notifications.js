import {NOTIFY_MANAGER} from '../actions';
export default function(state={}, action){
  switch (action.type) {
    case NOTIFY_MANAGER:
        return action.payload.data
      break;
    default:
    return state;

  }
}
