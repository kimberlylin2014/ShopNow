export function calculateAverageRating(ratings) {
  const entries = Object.entries(ratings);
  let total = 0;
  let totalRatings = 0;
  for (let i = 0; i < entries.length; i++) {
    const rating = entries[i][0];
    const numOfRating = entries[i][1];
    total += Number(rating) * Number(numOfRating);
    totalRatings += Number(numOfRating);
  }
  const average = Number(total / totalRatings).toFixed(2);
  return average;
}

export function calculatePercentageOfRating(metaReview, rating) {
  const { ratings } = metaReview;
  const ratingCounts = Object.values(ratings);
  let totalRatingCounts = 0;
  ratingCounts.forEach((count) => {
    totalRatingCounts += Number(count);
  });
  const percentageOfRating = ((Number(ratings[rating]) / (totalRatingCounts)) * 100);
  if (Number.isNaN(percentageOfRating)) {
    return '0';
  }
  return percentageOfRating.toFixed(0);
}

export function calculateCharacteristicBreakdown(score) {
  let box1 = false;
  let box2 = false;
  let box3 = false;
  let marginLeft = '5%';

  if (score < 1.5) {
    box1 = true;
  } else if (score === 1.5) {
    box1 = true;
    marginLeft = '40%';
  } else if (score > 1.5 && score <= 2.9) {
    box1 = true;
    marginLeft = '80%';
  } else if (score < 3.5) {
    box2 = true;
  } else if (score === 3.5) {
    box2 = true;
    marginLeft = '40%';
  } else if (score > 3.5 && score < 4) {
    box2 = true;
    marginLeft = '80%';
  } else if (score < 4.5) {
    box3 = true;
  } else if (score === 4.5) {
    box3 = true;
    marginLeft = '40%';
  } else if (score > 4.5 && score <= 5) {
    box3 = true;
    marginLeft = '80%';
  }

  const info = {
    marginLeft,
    box1,
    box2,
    box3,
  };

  return info;
}

export function getTotalReviews(numOfFalse, numOfTrue) {
  let falseNum;
  let trueNum;
  if (Number.isNaN(numOfFalse)) {
    falseNum = 0;
  } else {
    falseNum = numOfFalse;
  }
  if (Number.isNaN(numOfTrue)) {
    trueNum = 0;
  } else {
    trueNum = numOfTrue;
  }
  return Number(falseNum) + Number(trueNum);
}

export function getNumOfRecommendation(numOfFalse, numOfTrue) {
  let falseNum;
  let trueNum;
  if (Number.isNaN(numOfFalse)) {
    falseNum = 0;
  } else {
    falseNum = numOfFalse;
  }
  if (Number.isNaN(numOfTrue)) {
    trueNum = 0;
  } else {
    trueNum = numOfTrue;
  }
  const total = Number(falseNum) + Number(trueNum);
  const precentageOfRec = (Number(trueNum) / total) * 100;
  return precentageOfRec.toFixed(0);
}

export function determineNumReviewsToLoad(totalReviews, reviewCount) {
  const remainingReviews = totalReviews - reviewCount;
  if (remainingReviews === 0) {
    return 0;
  }
  if (remainingReviews === 1) {
    return 1;
  }
  return 2;
}

export function getUpdatedReviewsAndFilterTracker(reviews, filterTracker, rating) {
  const updatedFilterTracker = { ...filterTracker };
  let updatedReviews;
  let filterValues;

  filterValues = Object.values(updatedFilterTracker);

  if (filterValues.every((val) => val === true)) {
    const keys = Object.keys(updatedFilterTracker);
    for (let i = 0; i < keys.length; i++) {
      if (Number(keys[i]) !== rating) {
        updatedFilterTracker[keys[i]] = false;
      }
    }
  } else {
    updatedFilterTracker[rating] = !updatedFilterTracker[rating];
  }

  filterValues = Object.values(updatedFilterTracker);
  if (filterValues.every((val) => val === false)) {
    const keys = Object.keys(updatedFilterTracker);
    for (let i = 0; i < keys.length; i++) {
      updatedFilterTracker[keys[i]] = true;
    }
  }

  updatedReviews = reviews.map((review) => {
    const reviewData = { ...review };
    reviewData.display = updatedFilterTracker[reviewData.rating];
    return reviewData;
  });

  return { updatedFilterTracker, updatedReviews };
}
