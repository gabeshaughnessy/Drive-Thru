import React, { Component } from 'react';
import {connect} from 'react-redux';
import config from '../../config';
import {createOrder} from '../actions';

class Header extends Component {
  handleNewOrderClick = function(event){
    const size = Object.keys(this.props.orders).length;
    const id = size+1;
    this.props.createOrder(id);

  }
  render(){
    return (
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
        <li className="nav-item title">
            <h3>{config.restaraunt_name || "Drive-Thru"}</h3>
        </li>
        <li className="nav-item">
          <button
            onClick={this.handleNewOrderClick.bind(this)}
            className="btn btn-secondary">
            Create New Order
          </button>
        </li>
        </ul>
      </nav>
    );
  }
}

function mapStateToProps(state){

  return {
    orders: state.orders
  }
}

export default connect(mapStateToProps, {createOrder})(Header);
