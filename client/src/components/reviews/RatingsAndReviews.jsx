/* eslint-disable import/extensions */
import React from 'react';
import styles from './RatingsAndReviews.css';
import ContainerBreakdown from './components/containerBreakdown/containerBreakdown.jsx';
import ContainerList from './components/containerList/containerList.jsx';

const mockData = [
  {
    review_id: 147688,
    rating: 2,
    summary: 'Doloremque illo qui repellat.',
    recommend: true,
    response: '"Porro consequatur odio tempore molestiae suscipit iusto."',
    body: 'Rerum enim qui incidunt. Velit architecto ut veritatis saepe aspernatur dicta consequatur veniam iste. Delectus molestiae aut voluptas eius culpa soluta libero id eos. Est iusto et.',
    date: '2020-07-11T00:00:00.000Z',
    reviewer_name: 'Janick_Wunsch81',
    helpfulness: 34,
    photos: [
      {
        id: 187128,
        url: 'https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80',
      },
      {
        id: 187129,
        url: 'https://images.unsplash.com/photo-1463100099107-aa0980c362e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
      },
      {
        id: 187130,
        url: 'https://images.unsplash.com/photo-1533779183510-8f55a55f15c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
      },
    ],
  },
];

const RatingsAndReviews = () => (
  <div className={styles.moduleColumns}>
    <ContainerBreakdown />
    <ContainerList reviews={mockData} />
  </div>
);

export default RatingsAndReviews;
