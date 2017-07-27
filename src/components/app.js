import React, { Component } from 'react';
import OrderList from '../containers/order-list';
import Order from '../containers/order';
import Header from './header';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <OrderList />
        <Order />
      </div>
    );
  }
}