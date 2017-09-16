import React, { Component } from 'react';
import { Provider } from 'react-redux';

import setupStore from './redux/setupStore';
import OrderPageContainer from './redux/containers/OrderPageContainer';

const store = setupStore();

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <OrderPageContainer />
        </Provider>
      </div>
    );
  }
}
