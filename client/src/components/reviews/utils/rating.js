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