import { shallow } from 'enzyme';
import { formIsValidated } from './formValidation.js';

const mockMetaReview = {
  product_id: '14040',
  ratings: {
    1: '1',
    5: '2',
  },
  recommended: {
    false: '1',
    true: '2',
  },
  characteristics: {
    Size: {
      id: 47040,
      value: '2.6666666666666667',
    },
    Width: {
      id: 47041,
      value: '4.0000000000000000',
    },
    Comfort: {
      id: 47042,
      value: '4.0000000000000000',
    },
    Quality: {
      id: 47043,
      value: '3.0000000000000000',
    },
  },
};

describe('Testing Form Validation', () => {
  test('testing formIsValidated function', () => {

  });
});
