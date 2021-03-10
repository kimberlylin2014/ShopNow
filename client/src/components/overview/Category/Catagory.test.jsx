import React from 'react';
import { shallow } from 'enzyme';
import Category from './Category.jsx';

describe('Category', () => {
  it('should render props from App', () => {
    const wrapper = shallow(<Category category="Pants" />);
    expect(wrapper.text()).toEqual("Pants");
  });

});