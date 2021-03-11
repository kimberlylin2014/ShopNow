import RatingsAndReviews from './RatingsAndReviews.jsx';
import { shallow } from 'enzyme';

describe('Testing RatingsAndReviews Component', () => {
  test('Module has default state' , () => {
    const wrapper = shallow(<RatingsAndReviews />);
    expect(wrapper).toHaveState({
      reviews: [],
      metaReview: null,
      sortBy: 'relevance',
      productInfo: null,
      totalReviews: 0,
      numOfRecommendation: null,
      reviewCount: 0,
      displayMoreReviewsButton: false,
      averageRating: 0,
    })
  })
})