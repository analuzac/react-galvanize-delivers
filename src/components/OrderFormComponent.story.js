import React from 'react';
import { storiesOf } from '@storybook/react';
import OrderFormComponent from './OrderFormComponent';

import './OrderFormComponent.story.css';

storiesOf('OrderFormComponent', module).add('Complete item passed in', () =>
  <OrderFormComponent
    customerInfo={{
      name: 'Nestor Toro',
      phone: '(650) 533-8676',
      address: '123 Main Street, Oakland, CA'
    }}
  />
);
