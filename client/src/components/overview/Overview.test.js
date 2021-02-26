import React from 'react';
import { shallow } from 'enzyme';
import Overview from './Overview.jsx';

describe('Overview', () => {
  it('should render correctly with no props', () => {
    const component = shallow(<Overview/>);

    expect(component).toMatchSnapshot();
  });

  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Overview debug />);

    expect(component).toMatchSnapshot();
  });

});