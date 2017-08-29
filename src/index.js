import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import OrderPage from './components/OrderPage';

let menuItems = [
  {
    id: 1001,
    name: 'Some Item A',
    price: 9.99,
    imagePath: '//via.placeholder.com/300x200'
  },
  {
    id: 1002,
    name: 'Some Item B',
    price: 8.99,
    imagePath: '//via.placeholder.com/300x200'
  },
  {
    id: 1003,
    name: 'Some Item C',
    price: 7.99,
    imagePath: '//via.placeholder.com/300x200'
  },
  {
    id: 1004,
    name: 'Some Item D',
    price: 6.99,
    imagePath: '//via.placeholder.com/300x200'
  }
];

// let customerInfo = {
//   name: 'Nestor Toro',
//   phone: '(650) 533-8676',
//   address: '123 Main Street, Oakland, CA'
// };

let customerInfo = {};

function onAddItem(itemId) {
  selectedItems(menuItems, itemId);
}

function onSubmit(info) {
  customerInfo = info;
  render();
}

function onClose() {
  customerInfo = null;
  render();
}

let orderItems = [];

function render() {
  ReactDOM.render(
    <OrderPage
      menuItems={menuItems}
      orderItems={orderItems}
      customerInfo={customerInfo}
      onAddItem={onAddItem}
      onSubmit={onSubmit}
      onClose={onClose}
    />,
    document.getElementById('root')
  );
}

//Calling render once at the beginning to initialize page
render();

//To find matching ids and re-render
function selectedItems(menuArr, theId) {
  for (let i = 0; i < menuArr.length; i++) {
    if (menuArr[i].id === theId) {
      orderItems.push(menuArr[i]);
    }
  }

  render();

  return orderItems;
}
