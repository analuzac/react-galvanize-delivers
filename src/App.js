import React, { Component } from 'react';
import OrderPage from './components/OrderPage';
import getMenuItems from './requests/getMenuItems';

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
    // Before Redux:
    // getMenuItems().then(menuItems => {
    //   this.setState({
    //     menuItems
    //   });
    // });

    // WE FETCH DATA FROM INTERNAL DATA FOLDER
    getMenuItems().then(menuItems => {
      this.props.store.dispatch({ type: 'SET_ITEMS', menuItems });
    });
  }

  _addItem = itemId => {
    // Before Redux:
    // this.setState(prevState => {
    //   const menuItems = prevState.menuItems;
    //   const orderItems = prevState.orderItems.slice(0);
    //   orderItems.push(menuItems.find(menuItem => menuItem.id === itemId));
    //   return {
    //     orderItems
    //   };
    // });

    let itemToBeAddedToState = this.state.menuItems.find(
      menuItem => menuItem.id === itemId
    );

    this.props.store.dispatch({ type: 'SET_ADD_ITEM', itemToBeAddedToState });
  };

  _submitOrderForm = ({ name, phone, address }) => {
    // Before Redux:
    // this.setState({
    //   customerInfo: { name, phone, address }
    this.props.store.dispatch({
      type: 'SET_SUBMIT_ORDER',
      customerInfo: { name, phone, address }
    });
  };

  _closeOrderSuccessMessage = () => {
    // Before Redux:
    // this.setState({
    //   customerInfo: null,
    //   orderItems: []
    // });

    this.props.store.dispatch({
      type: 'SET_CLOSE_ORDER',
      customerInfo: null,
      orderItems: []
    });
  };
}
