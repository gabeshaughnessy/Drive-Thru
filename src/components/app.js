import React, { Component } from 'react';
import OrderList from '../containers/order-list';
import Header from '../containers/header';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <OrderList />
      </div>
    );
  }
}
