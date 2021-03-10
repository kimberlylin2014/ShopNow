import {
  determineNumReviewsToLoad,
  getNumOfRecommendation,
  getTotalReviews,
  calculateCharacteristicBreakdown,
  calculatePercentageOfRating,
  calculateAverageRating,
} from './rating.js';
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


describe('Testing Rating\'s determineNumReviewsToLoad function', () => {
  test('If there are 10 total reviews and 4 current displayed reviews ', () => {
    const num = determineNumReviewsToLoad(10, 4);
    expect(num).toEqual({"displayButton": true, "reviewCount": 6});
  })

  test('If there are 5 total reviews and 4 current displayed reviews ', () => {
    const num = determineNumReviewsToLoad(5, 4);
    expect(num).toEqual({"displayButton": false, "reviewCount": 5});
  });


  test('If there are 6 total reviews and 4 current displayed reviews ', () => {
    const num = determineNumReviewsToLoad(6, 4);
    expect(num).toEqual({"displayButton": false, "reviewCount": 6});
  });
});


describe('Testing Rating\'s getNumOfRecommendation', () => {
  test('If there 10 recommend and 5 do not recommend, there should be 50% recommendation rate', () => {
    const recommendedPercent = getNumOfRecommendation(5, 5);
    expect(recommendedPercent).toBe("50");
  });
});

describe('Testing Rating\'s getNumOfRecommendation', () => {
  test('If 5 recommended and 5 non-recommended reviews, there are total of 10 reviews', () => {
    const recommendedPercent = getTotalReviews(5, 5);
    expect(recommendedPercent).toBe(10);
  });
});


describe('Testing Rating\'s calculateCharacteristicBreakdown', () => {
  test('calculate 3.5', () => {
    const breakdownRating = calculateCharacteristicBreakdown(3.5);
    expect(breakdownRating).toEqual({marginLeft: "40%", box1: false, box2: true, box3: false})
  });
});

describe('Testing Rating\'s calculatePercentageOfRating', () => {
  test('calculate rating 5', () => {
    const percentage = calculatePercentageOfRating(mockMetaReview, '5')
    expect(percentage).toEqual("67")
  });
});

describe('Testing Rating\'s calculateAverageRating', () => {
  test('calculate average rating', () => {
    const averageRating =  {
      2: "1",
      3: "3",
      4: "2",
      5: "5",
    };
    const actual = calculateAverageRating(averageRating);
    expect(actual).toBe('4.00');
  });
});