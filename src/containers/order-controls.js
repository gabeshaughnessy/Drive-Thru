import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class OrderControls extends Component{
  render(){
    const order = this.props.order;
    return(
      <div className="order-controls">
        <button
          className="btn btn-primary"
          onClick={() => {

            if(order.status == 'cooking' || order.status == 'updated'){
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
    );
  }
}

export default connect(null, actions)(OrderControls);
