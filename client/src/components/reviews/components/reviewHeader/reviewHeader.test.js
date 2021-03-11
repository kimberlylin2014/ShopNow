import React from 'react';
import ReviewHeader from './reviewHeader.jsx';
import {shallow, mount} from 'enzyme';


describe('Testing Review Header', () => {
  test('Expecting review prop', () => {
    const reviewProp = {
      body: "Now I can get to stomping!",
      date: "2019-05-04T00:00:00.000Z",
      helpfulness: 12,
      photos: [],
      rating: 4,
      recommend: true,
      response: "",
      review_id: 130758,
      reviewer_name: "will",
      summary: "Great shoes!",
  }
    const wrapper = mount(<ReviewHeader review={reviewProp}/>);
    expect(wrapper).toHaveProp('review');
  })
})