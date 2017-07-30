import React, {Component} from 'react';
import * as actions from '../actions';
import {connect} from 'react-redux';

class MenuItem extends Component {
  render(){
    const item = this.props.item;
    return(
      <li
        className="item menu-item"
        key={item.name}>
        <span className="item-name">{item.name}</span>
        <button
          className="btn btn-default"
          onClick={()=>{this.props.addItem(this.props.order, item)}}>
          +
        </button>
      </li>
    );
  }
}

export default connect(null, actions)(MenuItem);
