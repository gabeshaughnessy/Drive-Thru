import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class OrderItem extends Component{
  render(){
    const item = this.props.item;
    const order = this.props.order;

    return(
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
  }
}

export default connect(null, actions)(OrderItem);
