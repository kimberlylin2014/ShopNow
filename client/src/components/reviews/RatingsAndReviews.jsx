/* eslint-disable import/extensions */
import React from 'react';
import styles from './RatingsAndReviews.css';
import ContainerBreakdown from './components/containerBreakdown/containerBreakdown.jsx';
import ContainerList from './components/containerList/containerList.jsx';

const RatingsAndReviews = () => (
  <div className={styles.moduleColumns}>
    <ContainerBreakdown />
    <ContainerList />
  </div>
);

export default RatingsAndReviews;
