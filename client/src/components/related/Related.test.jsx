/* eslint-disable no-undef */
/* eslint-disable import/extensions */
import React from 'react';
import { shallow } from 'enzyme';
import Related from './Related.jsx';

const wrapper = shallow(<Related />);
test('correct text rendered', () => {
  expect(wrapper.find('div').text()).toContain('Related Items and Comparisons');
});
