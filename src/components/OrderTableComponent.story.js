import React from 'react';
import { storiesOf } from '@storybook/react';
import OrderTableComponent from './OrderTableComponent';

import './OrderTableComponent.story.css';

storiesOf('OrderTableComponent', module).add('Complete item passed in', () =>
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
);
