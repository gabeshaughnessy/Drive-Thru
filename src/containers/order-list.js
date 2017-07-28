import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class OrderList extends Component {

  handleNewOrderClick = function(event){
    const size = Object.keys(this.props.orders).length;
    const id = size+1;
    this.props.createOrder(id);

  }

  renderMenuItems(items, order){
    if(items.length > 0){
      return items.map((item)=>{
        return (
          <li
            className="item menu-item"
            key={item.name}>
            <span className="item-name">{item.name}</span>
            <span className="item-price">{item.price}</span>
            <button
              className="btn btn-secondary"
              onClick={()=>{this.props.addToOrder(item, order)}}>
              Add to Order
            </button>
          </li>
        );
      });
    }
  }
  renderOrderItems(order){
    if(order.items.length == 0 ){
      return(<div>Add Items to the Order</div>);
    }else{
      return order.items.map((item)=>{
        return (
          <li
            className="item order-item"
            key="item.name">
            {item.name}
          </li>
        );
      });
    }
  }


  renderOrderList(){
    if(this.props.orders.length == 0){
      return(<div>Create an Order to Get Started</div>);
    }else{
      const orders = this.props.orders;
      return Object.keys(orders).map((i)=>{
        const order = orders[i];
        if(order.status === 'open'){
          return (
            <div  key={order.id}>
              <li className="order">
                <div className="order-details">
                  <span className="order-number">Order {order.id}</span>
                  <span className="total">Total: ${order.total}</span>
                </div>
              </li>
              <div className="order-controls">
                <button
                  className="btn btn-primary"
                  onClick={() => this.props.updateOrder(order, 'fulfill')}>
                  Fulfill
                </button>
                <button
                  className="btn btn-warning"
                  onClick={() => this.props.updateOrder(order, 'canceled')}>
                  Cancel
                </button>
              </div>
              <ul className="order-items">
               {this.renderOrderItems(order)}
              </ul>
              <h3>Add Items</h3>
              <hr />
              <ul className="menu-items">
                {this.renderMenuItems(this.props.menuItems, order)}
              </ul>
            </div>
          );
        }
      });
    }
  }
  render() {
    return (
      <div>
      <h3>Open Orders</h3>
        <button
          onClick={this.handleNewOrderClick.bind(this)}
          className="btn btn-primary">
          Create New Order
        </button>
        <ul className="order-list">
          {this.renderOrderList()}
        </ul>
      </div>
    );
  }
}
function mapStateToProps(state){

  return {
    orders: state.orders,
    menuItems : state.menuItems
  }
}

export default connect(mapStateToProps, actions)(OrderList);
