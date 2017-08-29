import React from 'react';
import { storiesOf } from '@storybook/react';
import OrderFormComponent from './OrderFormComponent';

import './OrderFormComponent.story.css';

storiesOf('OrderFormComponent', module).add('To test onSubmit', () =>
  <OrderFormComponent onSubmit={customerInfo => console.log(customerInfo)} />
);
