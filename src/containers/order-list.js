import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class OrderList extends Component {

  handleClick = function(event){
    const id = this.props.orders.length+1;
    event.preventDefault();
    this.props.createOrder(id);

  }
  renderOrderList(){
    if(this.props.orders.length == 0){
      return(<div>Create an Order to Get Started</div>);
    }else{
      return this.props.orders.map((order)=>{
        if(order.status === 'open'){
          return (
            <li className="order" key={order.id}>
              <div>
                <span className="order-number">Order {order.id}</span>
                <span className="total">Total: {order.total}</span>
              </div>
              <div>
                <button className="btn btn-primary">Fulfill</button>
                <button className="btn btn-warning">Cancel</button>
                <button className="btn btn-secondary">View</button>
              </div>
            </li>
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
          onClick={this.handleClick.bind(this)}
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
    orders: state.orders
  }
}

export default connect(mapStateToProps, actions)(OrderList);
