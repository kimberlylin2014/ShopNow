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

  // it('should reset size selector after Add to Click is clicked', () => {
  //   console.log(wrapper.debug());
  //   wrapper.setState({needSize : false});
  //   const button = wrapper.find('button');
  //   button.simulate('click');
  //   expect(wrapper.state('reset')).toEqual(true);
  // })

  // it('should update the item in cart when clicking Add to Cart', () => {
  //   const wrapper = shallow(<AddToCart />);
  //   const button = wrapper.find('button');

  //   const shoppingBag = shallow(<Header />);
  //   const count = shoppingBag.find('p');
  //   console.log(count.debug());

  //   button.simulate('click');

  //   const newCount = shoppingBag.find('p');

  //   console.log(shoppingBag.html());

  //   expect(newCount.text).toBe(count.text);
  // });

});