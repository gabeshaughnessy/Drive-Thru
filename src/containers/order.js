import React, { Component } from 'react';
import {connect } from 'react-redux';
import  * as actions from '../actions';

class Order extends Component {
  render(){
    if(!this.props.activeOrder.id){
      return (
        <div>
          Choose an Order
        </div>
      );
    }else{
      const activeOrder = this.props.activeOrder;
      return (
        <div>
          <div className="order-details">
            <span className="order-number">Order {activeOrder.id}</span>
            <span className="total">Total: {activeOrder.total}</span>
          </div>

          <ul className="menu-items">
          </ul>
        </div>
      );
    }
  }
}

function mapStateToProps(state){
  return {
    activeOrder: state.activeOrder
  }
}

export default connect(mapStateToProps, actions)(Order);
