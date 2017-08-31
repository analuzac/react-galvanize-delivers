import React, { Component } from 'react';
import OrderPage from './components/OrderPage';
import getMenuItems from './requests/getMenuItems';

export default class App extends Component {
  state = {
    menuItems: null,
    orderItems: [],
    customerInfo: null
  };
  render() {
    return (
      <OrderPage
        menuItems={this.state.menuItems}
        orderItems={this.state.orderItems}
        customerInfo={this.state.customerInfo}
        onAddItem={this._addItem}
        onSubmit={this._submitOrderForm}
        onClose={this._closeOrderSuccessMessage}
      />
    );
  }

  componentDidMount() {
    getMenuItems().then(menuItems => {
      this.setState({
        menuItems
      });
    });
  }

  _addItem = itemId => {
    //add a new item to the orderItems
    this.setState(prevState => {
      const menuItems = prevState.menuItems;
      const orderItems = prevState.orderItems.slice(0);
      orderItems.push(menuItems.find(menuItem => menuItem.id === itemId));
      return {
        orderItems
      };
    });
  };

  _submitOrderForm = ({ name, phone, address }) => {
    this.setState({
      customerInfo: { name, phone, address }
    });
  };

  _closeOrderSuccessMessage = () => {
    this.setState({
      customerInfo: null,
      orderItems: []
    });
  };
}
