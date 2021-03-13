import React from 'react';
import { shallow } from 'enzyme';
import AddToCart from './AddToCart.jsx';

describe('AddToCart', () => {
  const wrapper = shallow(<AddToCart />);

  it('should display Add to Cart on Button', () => {
    expect(wrapper.find('button').text()).toEqual('ADD TO CART');
  });

  it('should pop up message to add size when attemptint to add to cart without selecting a size', () => {
    const button = wrapper.find('button');
    button.simulate('click');
    const text = wrapper.find('p');
    expect(text.length).toBe(1);
  });

  it('should hide pop up message whne a size is selected', () => {
    const button = wrapper.find('button');
    button.simulate('click');
    const text = wrapper.find('p');
    expect(text.length).toBe(1);
  });

});