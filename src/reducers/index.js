import { combineReducers } from 'redux';
import OrdersReducer from './reducer_orders';
import MenuItemsReducer from './reducer_menu_items';
import NotificationsReducer from './reducer_notifications';

const rootReducer = combineReducers({
  orders: OrdersReducer,
  menuItems: MenuItemsReducer,
  notifications: NotificationsReducer
});
export default rootReducer;
