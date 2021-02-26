import React from 'react';
import Related from './Related.jsx';
import { shallow } from 'enzyme';

const wrapper = shallow(<Related />);
test('correct text rendered', () => {
  expect(wrapper.find('div').text()).toContain('Related Items and Comparisons');
})
