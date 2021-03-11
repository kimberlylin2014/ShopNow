import React from 'react';
import SortBy from './sortBy.jsx';
import {shallow} from 'enzyme';

describe('Testing SortBy Component', () => {
  test('Form should be available to allow users to sort', () => {
    const wrapper = shallow(<SortBy />);
    expect(wrapper).toContainExactlyOneMatchingElement('form')
  });

  test('Form should have default state relevance', () => {
    const wrapper = shallow(<SortBy />);
    expect(wrapper).toHaveState({
      sortByValue: 'relevance',
    });
  });

  test('Expecting certain props', () => {
    const toggleSortBy = jest.fn();
    const totalReviews = 11;
    const wrapper = mount(<SortBy toggleSortBy={toggleSortBy} totalReviews={totalReviews}/>);
    expect(wrapper).toHaveProp('toggleSortBy');
  })
});