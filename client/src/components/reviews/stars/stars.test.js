import Stars from './stars.jsx';

import { shallow } from 'enzyme';

describe('<Star Component />', () => {
  it('should render correctly with no props', () => {
    const component = shallow(<Stars/>);
    expect(component).toMatchSnapshot();
  });
});