import React from 'react';
import { storiesOf } from '@storybook/react';
import OrderPage from './OrderPage';

let menuItems = [
  {
    id: '1001',
    name: 'Some Item A',
    price: 9.99,
    imagePath: '//via.placeholder.com/300x200'
  },
  {
    id: '1002',
    name: 'Some Item B',
    price: 8.99,
    imagePath: '//via.placeholder.com/300x200'
  },
  {
    id: '1003',
    name: 'Some Item C',
    price: 7.99,
    imagePath: '//via.placeholder.com/300x200'
  },
  {
    id: '1004',
    name: 'Some Item D',
    price: 6.99,
    imagePath: '//via.placeholder.com/300x200'
  }
];

let orderItems = [
  {
    id: '1001',
    name: 'Some Item A',
    price: 9.99
  },
  {
    id: '1002',
    name: 'Some Item B',
    price: 8.99
  },
  {
    id: '1003',
    name: 'Some Item C',
    price: 7.99
  },
  {
    id: '1004',
    name: 'Some Item D',
    price: 6.99
  }
];

let customerInfo = {
  name: 'Nestor Toro',
  phone: '(650) 533-8676',
  address: '123 Main Street, Oakland, CA'
};

storiesOf('OrderPageLayout', module).add('Happy path', () =>
  <OrderPage
    menuItems={menuItems}
    orderItems={orderItems}
    customerInfo={customerInfo}
  />
);
