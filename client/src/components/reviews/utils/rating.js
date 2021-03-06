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