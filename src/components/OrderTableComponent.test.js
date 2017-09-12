import React from 'react';
import { shallow, mount } from 'enzyme';
import OrderTableComponent from './OrderTableComponent';

let orderItems = [
  {
    id: 1001,
    name: 'Royale with Cheese',
    price: 8.99,
    imagePath: 'img/burger.jpg'
  },
  {
    id: 1002,
    name: 'Arugula Pie',
    price: 11.99,
    imagePath: 'img/pizza.jpg'
  },
  {
    id: 1003,
    name: 'Smoked Swine',
    price: 14.99,
    imagePath: 'img/ribs.jpg'
  },
  {
    id: 1004,
    name: 'Ice Cream Biscut',
    price: 7.99,
    imagePath: 'img/ice_cream.jpg'
  },
  {
    id: 1005,
    name: 'Banh Mi',
    price: 9.99,
    imagePath: 'img/banh_mi.jpg'
  }
];

describe('a shallow test', () => {
  const shallowWrapper = shallow(
    <OrderTableComponent orderItems={orderItems} />
  );

  it('should highlight the .find method', () => {
    expect(shallowWrapper.find('table.striped')).toHaveLength(1);
    // expect(shallowWrapper.find('.striped col s12 m12').children()).toHaveLength(
    //   3
    // );
  });
});
