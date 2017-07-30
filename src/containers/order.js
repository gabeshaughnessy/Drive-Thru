import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import MenuItem from './menu-item';
import OrderItem from './order-item';
import OrderControls from './order-controls';

class Order extends Component {

  renderMenuItems(items, order){
    if(items.length > 0){
      return items.map((item)=>{
        return (
          <MenuItem order={order} item={item} key={item.name}/>
        );
      });
    }
  }
  renderOrderItems(order){
    if(!_.some(order.items)){
      return(<li><h6 className="instructions">Add Items to the Order</h6></li>);
    }else{
      return Object.keys(order.items).map((i)=>{
        const item = order.items[i];
        return (
          <OrderItem order={order} item={item} key={item.name}/>
        );
      });
    }
  }


  render(){
    const order = this.props.order;

    //cooking status
    let cookingStatus = '';
    if(order.status == 'cooking'){
      cookingStatus = <span className="cooking bg-primary">Cooking</span>
    }else if (order.status == 'updated') {
      cookingStatus = <span className="cooking text-warning bg-warning">Updated</span>
    }
    return(
      <li className="order" key={order.id}>
        <div className="order-details h5">
          {cookingStatus}
          <span className="order-number">Order#: {order.id} </span>
          <span className="total">Total: <span className="price">${order.total.toFixed(2)}</span></span>
          <span className="created-at">Created at: <span className="time">{order.createdAt.toLocaleTimeString()}</span></span>
        </div>
        <OrderControls order={order} />
        <ul className="order-items list-inline">
         {this.renderOrderItems(order)}
        </ul>
        <h4>Add Items to Order</h4>
        <ul className="menu-items list-inline">
          {this.renderMenuItems(this.props.menuItems, order)}
        </ul>
      </li>
    );
  }
}

export default connect(null, actions)(Order);
