import { determineNumReviewsToLoad, getNumOfRecommendation, getTotalReviews } from './rating.js';
import 'jest';

describe('Testing Rating\'s determineNumReviewsToLoad function', () => {
  test('If there are 10 total reviews and 4 current displayed reviews ', () => {
    const num = determineNumReviewsToLoad(10, 4);
    expect(num).toEqual({"displayButton": true, "reviewCount": 6});
  })

  test('If there are 5 total reviews and 4 current displayed reviews ', () => {
    const num = determineNumReviewsToLoad(5, 4);
    expect(num).toEqual({"displayButton": false, "reviewCount": 5});
  })


  test('If there are 6 total reviews and 4 current displayed reviews ', () => {
    const num = determineNumReviewsToLoad(6, 4);
    expect(num).toEqual({"displayButton": false, "reviewCount": 6});
  })
})


describe('Testing Rating\'s getNumOfRecommendation', () => {
  test('If there 10 recommend and 5 do not recommend, there should be 50% recommendation rate', () => {
    const recommendedPercent = getNumOfRecommendation(5, 5);
    expect(recommendedPercent).toBe("50");
  })
})


describe('Testing Rating\'s getNumOfRecommendation', () => {
  test('If 5 recommended and 5 non-recommended reviews, there are total of 10 reviews', () => {
    const recommendedPercent = getTotalReviews(5, 5);
    expect(recommendedPercent).toBe(10);
  })
})