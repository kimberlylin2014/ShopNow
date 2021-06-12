import React from 'react';
import styles from './reviewTiles.css';
import Summary from '../summary/summary.jsx';
import Body from '../body/body.jsx';
import ReviewHeader from '../reviewHeader/reviewHeader.jsx';
import IRecommend from '../iRecommend/iRecommend.jsx';
import Helpfulness from '../helpfulness/helpfulness.jsx';

const ReviewTile = ({review, updateHelpfulByReviewID}) => (
  <>
    {review.display ? (
      <div className={styles.reviewTile}>
        <ReviewHeader review={review} />
        <Summary summary={review.summary} />
        <Body body={review.body} />
        <IRecommend review={review} />
        <Helpfulness review={review} updateHelpfulByReviewID={updateHelpfulByReviewID} />
      </div>
    ) : null}
  </>


);

export default ReviewTile;
