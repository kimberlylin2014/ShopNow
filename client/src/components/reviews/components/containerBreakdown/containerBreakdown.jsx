import React from 'react';
import styles from './containerBreakdown.css';
import BreakdownHeader from '../breakdownHeader/breakdownHeader.jsx';
import TotalRecommendation from '../totalRecommendation/totalRecommendation.jsx';
import RatingBreakdown from '../ratingBreakdown/ratingBreakdown.jsx';
import BreakdownCharacteristics from '../breakdownCharacteristics/breakdownCharacteristics.jsx';
import {calculatePercentageOfRating} from '../../utils/rating.js';

const ContainerBreakdown = ({ metaReview, numOfRecommendation, totalReviews }) => (
  <div className={styles.containerBreakdown}>
    <BreakdownHeader metaReview={metaReview} totalReviews={totalReviews} />
    <TotalRecommendation numOfRecommendation={numOfRecommendation} />
    {metaReview ? (
      <div className={styles.ratingBreakdown}>
        <RatingBreakdown starNum="5" percentRating={calculatePercentageOfRating(metaReview, '5')} count={metaReview.ratings['5']} />
        <RatingBreakdown starNum="4" percentRating={calculatePercentageOfRating(metaReview, '4')} count={metaReview.ratings['4']} />
        <RatingBreakdown starNum="3" percentRating={calculatePercentageOfRating(metaReview, '3')} count={metaReview.ratings['3']} />
        <RatingBreakdown starNum="2" percentRating={calculatePercentageOfRating(metaReview, '2')} count={metaReview.ratings['2']} />
        <RatingBreakdown starNum="1" percentRating={calculatePercentageOfRating(metaReview, '1')} count={metaReview.ratings['1']} />
      </div>
    ): null}
    <BreakdownCharacteristics metaReview={metaReview} />
  </div>
);

export default ContainerBreakdown;
