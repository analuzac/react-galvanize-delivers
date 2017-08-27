import React from 'react';
import { storiesOf } from '@storybook/react';
import MenuComponent from './MenuComponent';

import './MenuComponent.story.css';

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

storiesOf('MenuComponent', module).add('Happy path', () =>
  <MenuComponent menuItems={menuItems} />
);
storiesOf('MenuComponent', module).add('To test AddItem', () =>
  <MenuComponent
    menuItems={menuItems}
    //onAddItem={menuItems.id}
    onAddItem={itemId => console.log(itemId)}
  />
);
