import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class Order extends Component {

  renderMenuItems(items, order){
    if(items.length > 0){
      return items.map((item)=>{
        return (
          <li
            className="item menu-item"
            key={item.name}>
            <span className="item-name">{item.name}</span>
            <button
              className="btn btn-default"
              onClick={()=>{this.props.addItem(order, item)}}>
              +
            </button>
          </li>
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
          <li
            className="item order-item"
            key={item.name}>
            <span className="item-name">{item.name} - </span>
            <span className="item-qty">qty: {item.qty}</span>
            <button
              className="btn btn-warning"
              onClick={()=>{this.props.removeItem(order, item);}}>
              &times;
            </button>
          </li>
        );
      });
    }
  }


  render(){
    const order = this.props.order;
    //get the orders out before n seconds have passed
    const orderAge = new Date().getSeconds() - order.createdAt.getSeconds();
    let orderTimeClass = 'time';
    if(orderAge > 20){
      orderTimeClass = 'time danger';
    }else if(orderAge > 10){
      orderTimeClass = 'time warning';
    }


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
          <span className="created-at">Created at: <span className={orderTimeClass}>{order.createdAt.toLocaleTimeString()}</span></span>
        </div>
        <div className="order-controls">
          <button
            className="btn btn-primary"
            onClick={() => {
              if(order.status == 'cooking'){
                this.props.updateOrder(order, 'updated')
              }else if(Object.keys(order.items).length > 0){
                this.props.updateOrder(order, 'cooking')
              }else{
                alert('you must add at least one item to the order');
              }
            }} >
            {(order.status == 'open')? 'Send to Cooks' :'Update Order'}

          </button>
          <button
            className="btn btn-success"
            onClick={() => this.props.updateOrder(order, 'fulfilled')}>
            Fulfill
          </button>
          <button
            className="btn btn-danger"
            onClick={() => this.props.updateOrder(order, 'canceled')}>
            Cancel
          </button>
        </div>
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
