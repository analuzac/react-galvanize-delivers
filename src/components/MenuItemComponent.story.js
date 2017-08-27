import React from 'react';
import { storiesOf } from '@storybook/react';
import MenuItemComponent from './MenuItemComponent';

import './MenuItemComponent.story.css';

let menuItem = {
  id: 1001,
  name: 'Some Item A',
  price: 9.99,
  imagePath: '//via.placeholder.com/300x200'
};

storiesOf('MenuItemComponent', module)
  .add('Complete item passed in', () =>
    <MenuItemComponent menuItem={menuItem} />
  )
  .add('To test AddItem', () =>
    <MenuItemComponent
      menuItem={menuItem}
      //onAddItem={menuItem.id}
      onAddItem={itemId => console.log(menuItem.id)}
    />
  );
