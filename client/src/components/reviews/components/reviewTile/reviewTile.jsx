import React from 'react';
import PropTypes from 'prop-types';
import styles from './reviewTiles.css';
import Summary from '../summary/summary.jsx';
import Body from '../body/Body.jsx';
import ReviewHeader from '../reviewHeader/reviewHeader.jsx';
import IRecommend from '../iRecommend/iRecommend.jsx';
import Response from '../response/response.jsx';
import Helpfulness from '../helpfulness/helpfulness.jsx';

const ReviewTile = ({review, updateHelpfulByReviewID}) => (
  <div className={styles.reviewTile}>
    <ReviewHeader review={review} />
    <Summary summary={review.summary} />
    <Body body={review.body} />
    <IRecommend />
    {/* <Response /> */}
    {/* <Helpfulness helpfulness={review.helpfulness} /> */}
    <Helpfulness review={review} updateHelpfulByReviewID={updateHelpfulByReviewID}/>
  </div>
);

export default ReviewTile;
