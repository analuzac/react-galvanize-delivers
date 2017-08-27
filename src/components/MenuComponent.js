import React from 'react';

import MenuItemComponent from './MenuItemComponent';

export default function MenuComponent({ menuItems, onAddItem }) {
  return (
    <div className="MenuComponent">
      {menuItems.map(menuItem =>
        <MenuItemComponent
          key={menuItem.id}
          menuItem={menuItem}
          onAddItem={onAddItem}
        />
      )}
    </div>
  );
}
