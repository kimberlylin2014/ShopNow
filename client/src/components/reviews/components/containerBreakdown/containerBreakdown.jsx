import React from 'react';
import styles from './containerBreakdown.css';
import BreakdownHeader from '../breakdownHeader/breakdownHeader.jsx';
import TotalRecommendation from '../totalRecommendation/totalRecommendation.jsx';
import RatingBreakdown from '../ratingBreakdown/ratingBreakdown.jsx';

const ContainerBreakdown = () => (
  <div className={styles.containerBreakdown}>
    <BreakdownHeader />
    <TotalRecommendation />
    <RatingBreakdown starNum="5" />
    <RatingBreakdown starNum="4" />
    <RatingBreakdown starNum="3" />
    <RatingBreakdown starNum="2" />
    <RatingBreakdown starNum="1" />
  </div>
);

export default ContainerBreakdown;
