/* eslint-disable no-undef */
/* eslint-disable import/extensions */
import React from 'react';
import { shallow } from 'enzyme';
import App from './app.jsx';
import RelatedItemsAndComparison from './components/related/RelatedItemsAndComparison.jsx';

describe('<App />', () => {
  it('passes productID and styleID to <RelatedItemsAndComparison /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(RelatedItemsAndComparison)).toHaveProp('productID');
    expect(wrapper.find(RelatedItemsAndComparison)).toHaveProp('styleIndex');
  });
});
