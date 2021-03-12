import React from 'react';
import PropTypes from 'prop-types';
import styles from './reviewTiles.css';
import Summary from '../summary/summary.jsx';
import Body from '../body/body.jsx';
import ReviewHeader from '../reviewHeader/reviewHeader.jsx';
import IRecommend from '../iRecommend/iRecommend.jsx';
import Response from '../response/response.jsx';
import Helpfulness from '../helpfulness/helpfulness.jsx';

const ReviewTile = ({review, updateHelpfulByReviewID}) => (
  <React.Fragment>
    {review.display ? (
      <div className={styles.reviewTile}>
        <ReviewHeader review={review} />
        <Summary summary={review.summary} />
        <Body body={review.body} />
        <IRecommend review={review} />
        {/* <Response /> */}
        <Helpfulness review={review} updateHelpfulByReviewID={updateHelpfulByReviewID} />
      </div>
    ) : null}
  </React.Fragment>


);

export default ReviewTile;
