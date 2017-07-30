import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import _ from 'lodash';
import config from '../../config';

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


  renderOrderList(){
    if(!_.some(this.props.orders)){
      return(<div><h6 className="instructions">Create an Order to Get Started</h6></div>);
    }else{

      const openStatus = ['open', 'cooking', 'updated'];

      function countOpenOrders(orders) {
        var count = 0;
        for (var order in orders){
          if(openStatus.indexOf(orders[order].status) !== -1){
            count++;
          }
        }
        return count;
      };

      const openOrders = countOpenOrders(this.props.orders);
      const threshold = config.threshold || 4;

      if(openOrders > threshold && openOrders !== this.props.notifications.orderCount ){
        this.props.notifyManager(openOrders);
      }else if(this.props.notifications.warning == true && openOrders !== this.props.notifications.orderCount){
        this.props.notifyManager(openOrders);
      }

      return Object.keys(this.props.orders).map((i)=>{
        const order = this.props.orders[i];

        if(openStatus.indexOf(order.status) !== -1){





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



          return (
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
      });
    }
  }
  render() {
    let notification = '';
    const threshold = config.threshold || 4;
    if(Object.keys(this.props.notifications).length > 0 && this.props.notifications.message !== "" ){
      let warningClass = "";
      if(this.props.notifications.orderCount == threshold + 1){
        warningClass = "notification text-warning bg-warning";
      }else if (this.props.notifications.orderCount > threshold + 1) {
        warningClass = "notification text-danger bg-danger";
      }else if (this.props.notifications.orderCount == threshold) {
        warningClass = "notification text-success bg-success";
      }
      notification = <p className={warningClass}>{this.props.notifications.message}</p>;
    }
    return (
      <div>
        <button
          onClick={this.handleNewOrderClick.bind(this)}
          className="btn btn-primary">
          Create New Order
        </button>
        <h4>Open Orders</h4>
        {notification}
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
    menuItems : state.menuItems,
    notifications : state.notifications
  }
}

export default connect(mapStateToProps, actions)(OrderList);
