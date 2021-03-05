import React from 'react';
import styles from './containerBreakdown.css';
import BreakdownHeader from '../breakdownHeader/breakdownHeader.jsx';
import TotalRecommendation from '../totalRecommendation/totalRecommendation.jsx';
import RatingBreakdown from '../ratingBreakdown/ratingBreakdown.jsx';
import BreakdownCharacteristics from '../breakdownCharacteristics/breakdownCharacteristics.jsx';

const ContainerBreakdown = ({ metaReview, numOfRecommendation }) => (
  <div className={styles.containerBreakdown}>
    <BreakdownHeader metaReview={metaReview}/>
    <TotalRecommendation numOfRecommendation={numOfRecommendation} />
    <RatingBreakdown starNum="5" />
    <RatingBreakdown starNum="4" />
    <RatingBreakdown starNum="3" />
    <RatingBreakdown starNum="2" />
    <RatingBreakdown starNum="1" />
    <BreakdownCharacteristics metaReview={metaReview} />
  </div>
);

export default ContainerBreakdown;
