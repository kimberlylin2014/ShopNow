/* eslint-disable no-undef */
/* eslint-disable import/extensions */
import React from 'react';
import { shallow } from 'enzyme';
import RelatedItemsAndComparison from './RelatedItemsAndComparison.jsx';
import Section from './Section';

describe('<RelatedItemsAndComparison />', () => {
  it('renders two <Section /> components', () => {
    const wrapper = shallow(<RelatedItemsAndComparison />);
    expect(wrapper.find(Section)).toHaveLength(2);
  });
  it('passes identifying name prop to first <Section /> component (Related Products)', () => {
    const wrapper = shallow(<RelatedItemsAndComparison />);
    expect(wrapper.find(Section).at(0)).toHaveProp('name', 'related');
  });
  it('passes identifying name prop to second <Section /> component (Outfit Items)', () => {
    const wrapper = shallow(<RelatedItemsAndComparison />);
    expect(wrapper.find(Section).at(1)).toHaveProp('name', 'outfit');
  });
  it('has required pieces of state', () => {
    const wrapper = shallow(<RelatedItemsAndComparison />);
    expect(wrapper).toHaveState('currentProduct');
    expect(wrapper).toHaveState('relatedItems');
    expect(wrapper).toHaveState('outfitItems');
    expect(wrapper).toHaveState('showModal');
    expect(wrapper).toHaveState('selectedProduct');
  });
});
