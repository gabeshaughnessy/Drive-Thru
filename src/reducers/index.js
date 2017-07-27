import { combineReducers } from 'redux';
import OrdersReducer from './reducer_orders';
import MenuItemsReducer from './reducer_menu_items';

const rootReducer = combineReducers({
  orders: OrdersReducer,
  menuItems: MenuItemsReducer
});
export default rootReducer;
