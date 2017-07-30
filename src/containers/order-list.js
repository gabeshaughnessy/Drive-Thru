import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import Order from './order';
import _ from 'lodash';
import config from '../../config';

class OrderList extends Component {




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
          return (
            <Order order={order} menuItems={this.props.menuItems} key={order.id} />
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
      <div className="order-container">
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
