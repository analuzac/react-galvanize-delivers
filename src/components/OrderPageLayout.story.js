import React from 'react';
import { storiesOf } from '@storybook/react';
import OrderPageLayout from './OrderPageLayout';

import './OrderPageLayout.story.css';

import MenuComponent from './MenuComponent';
import OrderTableComponent from './OrderTableComponent';
import OrderFormComponent from './OrderFormComponent';

storiesOf('OrderPageLayout', module).add('Happy path', () =>
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
    <OrderFormComponent onSubmit={customerInfo => console.log(customerInfo)} />
  </OrderPageLayout>
);
