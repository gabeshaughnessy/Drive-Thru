import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import _ from 'lodash';

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
            <button
              className="btn btn-secondary"
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


  renderOrderList(){
    if(!_.some(this.props.orders)){
      return(<div><h6 className="instructions">Create an Order to Get Started</h6></div>);
    }else{
      const orders = this.props.orders;
      let openOrderCount = 0;
      return Object.keys(orders).map((i)=>{
        const order = orders[i];
        if(order.status === 'open'){
          openOrderCount++;
          if(openOrderCount > 4){
            alert('alert the manager');
          }

          //get the orders out before n seconds have passed
          const orderAge = new Date().getSeconds() - order.createdAt.getSeconds();
          let orderTimeClass = 'time';
          if(orderAge > 20){
            orderTimeClass = 'time danger';
          }else if(orderAge > 10){
            orderTimeClass = 'time warning';
          }


          return (
            <li className="order" key={order.id}>
              <div className="order-details h5">
                <span className="order-number">Order#: {order.id} </span>
                <span className="total">Total: <span className="price">${order.total}</span></span>
                <span className="created-at">Created at: <span className={orderTimeClass}>{order.createdAt.toLocaleTimeString()}</span></span>

              </div>
              <div className="order-controls">
                <button
                  className="btn btn-primary"
                  >
                  Send to Cooks
                </button>
                <button
                  className="btn btn-success"
                  onClick={() => this.props.updateOrder(order, 'fulfill')}>
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
      });
    }
  }
  render() {
    return (
      <div>
        <button
          onClick={this.handleNewOrderClick.bind(this)}
          className="btn btn-primary">
          Create New Order
        </button>
        {console.log(this.props)}
        <h4>Open Orders</h4>
        <ul className="order-list list-unstyled">
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
