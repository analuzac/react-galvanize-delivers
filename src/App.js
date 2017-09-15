import React, { Component } from 'react';
import OrderPage from './components/OrderPage';
//import getMenuItems from './requests/getMenuItems';

import getMenuItemsProcess from './redux/thunks/getMenuItemsProcess';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuItems: null,
      orderItems: [],
      customerInfo: null
    };

    this.props.store.subscribe(() => {
      this.setState(this.props.store.getState());
    });
  }

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
    this.props.store.dispatch(getMenuItemsProcess());
  }

  _addItem = itemId => {
    let itemToBeAddedToState = this.state.menuItems.find(
      menuItem => menuItem.id === itemId
    );

    this.props.store.dispatch({ type: 'ADD_ITEM', itemToBeAddedToState });
  };

  _submitOrderForm = ({ name, phone, address }) => {
    this.props.store.dispatch({
      type: 'SUBMIT_ORDER',
      customerInfo: { name, phone, address }
    });
  };

  _closeOrderSuccessMessage = () => {
    this.props.store.dispatch({
      type: 'CLOSE_ORDER',
      customerInfo: null,
      orderItems: []
    });
  };
}
