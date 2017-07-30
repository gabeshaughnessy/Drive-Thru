import {NOTIFY_MANAGER, CLEAR_NOTIFICATIONS} from '../actions';
export default function(state={}, action){
  switch (action.type) {
    case NOTIFY_MANAGER:
      return action.payload.data
      break;
    case CLEAR_NOTIFICATIONS:
    return {}
    default:
    return state;

  }
}
