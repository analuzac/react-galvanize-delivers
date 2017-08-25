import React from 'react';

import MenuItemComponent from './MenuItemComponent';

export default function MenuComponent({ menuItems }) {
  return (
    <div className="MenuComponent">
      {menuItems.map(menuItem =>
        <MenuItemComponent key={menuItem.id} menuItem={menuItem} />
      )}
    </div>
  );
}
