import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import MenuComponent from './components/MenuComponent';
import OrderTableComponent from './components/OrderTableComponent';
import OrderFormComponent from './components/OrderFormComponent';
import OrderPageLayout from './components/OrderPageLayout';

const element = (
  <OrderPageLayout>
    <MenuComponent
      items={[
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
      ]}
    />
    <OrderTableComponent
      orderItems={[
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
      ]}
    />
    <OrderFormComponent
      customerInfo={{
        name: 'Nestor Toro',
        phone: '(650) 533-8676',
        address: '123 Main Street, Oakland, CA'
      }}
    />
  </OrderPageLayout>
);

ReactDOM.render(element, document.getElementById('root'));
