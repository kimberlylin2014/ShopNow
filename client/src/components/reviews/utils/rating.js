export function calculateAverageRating(ratings) {
  const entries = Object.entries(ratings);
  let total = 0;
  let numOfRatings = 0;
  for (let i = 0; i < entries.length; i++) {
    total += parseInt(entries[i][0]) * parseInt(entries[i][1]);
    numOfRatings += parseInt(entries[i][1])
  }
  const average = parseFloat(total / numOfRatings).toFixed(2);
  return average;
}

export function calculatePercentageOfRating(metaReview, rating) {
  const { ratings } = metaReview;
  const ratingCounts = Object.values(ratings);
  let totalRatingCounts = 0;
  ratingCounts.forEach((count) => {
    totalRatingCounts += parseInt(count);
  });
  const percentageOfRating = ((parseInt(ratings[rating])/(totalRatingCounts)) * 100).toFixed(0);
  return percentageOfRating;
}

export function calculateCharacteristicBreakdown(score) {
  let box1 = false;
  let box2 = false;
  let box3 = false;
  let marginLeft = '5%';

  if (parseFloat(score) < 1.5) {
    box1 = true;
  } else if (parseFloat(score) === 1.5) {
    box1 = true;
    marginLeft = '40%';
  } else if (parseFloat(score) > 1.5 && parseFloat(score) <= 2.9) {
    box1 = true;
    marginLeft = '80%';
  } else if (parseFloat(score) < 3.5) {
    box2 = true;
  } else if (parseFloat(score) === 3.5) {
    box2 = true;
    marginLeft = '40%';
  } else if (parseFloat(score) > 3.5 && parseFloat(score) < 4) {
    box2 = true;
    marginLeft = '80%';
  } else if (parseFloat(score) < 4.5) {
    box3 = true;
  } else if (parseFloat(score) === 4.5) {
    box3 = true;
    marginLeft = '40%';
  } else if (parseFloat(score) > 4.5 && parseFloat(score) <= 5) {
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
  if (isNaN(parseInt(numOfFalse))) {
    numOfFalse = 0;
  }
  if (isNaN(parseInt(numOfTrue))) {
    numOfTrue = 0;
  }
  return parseInt(numOfFalse) + parseInt(numOfTrue);
}

export function getNumOfRecommendation(numOfFalse, numOfTrue) {
  const total = parseInt(numOfFalse) + parseInt(numOfTrue);
  const precentageOfRec = (parseInt(numOfTrue) / total) * 100;
  return precentageOfRec.toFixed(0);
}

export function determineNumReviewsToLoad(totalReviews, reviewCount) {
  const result = {
    reviewCount: reviewCount,
    displayButton: true,
  };
  let difference;
  // check if totalReviews is now even/odd
  if (totalReviews % 2 === 0) {
    difference = 2;
  } else {
    difference = 1;
  }

  if (totalReviews % 2 !== 0) {
    if (totalReviews - reviewCount === difference) {
      result.reviewCount += 1;
      result.displayButton = false;
    } else {
      result.reviewCount += 2;
    }
  } else {
    if (totalReviews - reviewCount === difference) {
      result.reviewCount += 2;
      result.displayButton = false;
    } else {
      result.reviewCount += 2;
    }
  }

  return result;
}
