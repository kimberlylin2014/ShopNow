import React from 'react';
import { shallow } from 'enzyme';
import ProductTitle from './ProductTitle.jsx';

describe('ProductTitle', () => {
  it('should render props from App', () => {
    const wrapper = shallow(<ProductTitle title="Mint Green" />);
    expect(wrapper.text()).toEqual("Mint Green");
  });

});