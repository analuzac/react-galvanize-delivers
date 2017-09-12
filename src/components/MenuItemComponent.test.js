import React from 'react';
import { shallow, mount } from 'enzyme';
import MenuItemComponent from './MenuItemComponent';

const onAddItem = itemId => {
  console.log(`This is the itemID!!! ${itemId}`);
};

const menuItem = {
  name: 'Some Item A',
  price: 9.99,
  imagePath: '//via.placeholder.com/300x200'
};

const menuItems = [
  {
    name: 'Smoked Swine',
    price: 8.99,
    imagePath: '//via.placeholder.com/300x200',
    id: 1
  },
  {
    name: 'Royale with Cheese',
    price: 11.99,
    imagePath: '//via.placeholder.com/300x200',
    id: 2
  },
  {
    name: 'Arugula Pie',
    price: 14.99,
    imagePath: '//via.placeholder.com/300x200',
    id: 3
  },
  {
    name: 'Ice Cream Biscuit',
    price: 7.99,
    imagePath: '//via.placeholder.com/300x200',
    id: 4
  }
];

describe('a shallow test', () => {
  const shallowWrapper = shallow(
    <MenuItemComponent onAddItem={onAddItem} menuItem={menuItem} />
  );

  it('tests that the items name gets rendered', () => {
    expect(shallowWrapper.find('h5.card-title')).toHaveLength(1);
  });

  it('tests that the items price gets rendered', () => {
    expect(shallowWrapper.find('p')).toHaveLength(1);
  });

  // This is how you should properly test your mocked functions.
  // Note: If I do a shallow test, it gives me this error:
  // TypeError: Cannot read property 'preventDefault' of undefined
  // so I have to use mount for it to work
  it('should test if onAddItem function was fired', () => {
    const onAddItem = jest.fn();

    mount(<MenuItemComponent onAddItem={onAddItem} menuItem={menuItem} />)
      .find('a')
      .simulate('click');
    expect(onAddItem).toHaveBeenCalled();
  });

  expect(shallowWrapper).toMatchSnapshot();
});
