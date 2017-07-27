import { combineReducers } from 'redux';
import OrdersReducer from './reducer_orders';
import MenuItemsReducer from './reducer_menu_items';
import ActiveOrderReducer from './reducer_active_order';
const rootReducer = combineReducers({
  orders: OrdersReducer,
  activeOrder : ActiveOrderReducer,
  menuItems: MenuItemsReducer
});
export default rootReducer;
