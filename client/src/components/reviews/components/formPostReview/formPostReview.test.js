import FormPostReview from './formPostReview.jsx';
import { shallow } from 'enzyme';

describe('Test Form Post Review', () => {
  test('Form state should have expected properties', () => {
    const wrapper = shallow(<FormPostReview />);
    expect(wrapper).toHaveState({
      product_id: '',
      rating: '',
      recommend: '',
      characteristics: '',
      summary: '',
      body: '',
      bodyCounter: 50,
      name: '',
      email: '',
      photos: [],
      validationResult: {},
    })
  })

  test('Form expecting 5 FormInputs', () => {
    const wrapper = shallow(<FormPostReview />);
    expect(wrapper).toContainMatchingElements(5, 'FormInput')
  });

  test('Form expecting 1 Form Validation Message Component', () => {
    const wrapper = shallow(<FormPostReview />);
    expect(wrapper).toContainMatchingElements(1, 'FormValidationMessage')
  });
});
