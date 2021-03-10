import { formIsValidated } from './formValidation.js';
import 'jest';

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

const defaultFormState = {
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
};

describe('Testing Form Validation', () => {

  test('Expect function formIsValidated to return an object of boolean values', () => {
    const result = formIsValidated(defaultFormState, mockMetaReview);
    expect(result).toEqual({
      rating: expect.any(Boolean),
      recommendation: expect.any(Boolean),
      summary: expect.any(Boolean),
      review: expect.any(Boolean),
      name: expect.any(Boolean),
      email: expect.any(Boolean),
      characteristics: expect.any(Boolean),
    });
  });

  test('Expect output to have an object with the appropriate boolean values', () => {
    const expectedObj = {
      rating: false,
      recommendation: true,
      summary: false,
      review: false,
      name: false,
      email: false,
      characteristics: false,
    }
    defaultFormState.recommend = true;
    const result = formIsValidated(defaultFormState, mockMetaReview);
    expect(result).toStrictEqual(expectedObj);
  })
});
