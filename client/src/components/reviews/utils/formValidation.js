function createCharacteristicState(metaReview) {
  if (metaReview) {
    const { characteristics } = metaReview;
    const characteristicStateObj = {};
    const values = Object.values(characteristics);
    values.forEach((value) => {
      characteristicStateObj[value.id] = '';
    });
    return characteristicStateObj;
  }
  return '';
}

export function verifyRating() {

}

export function verifyRecommendation() {

}

export function verifySummary() {

}

export function verifyReviewBody() {

}

export function verifyUsername() {

}


export function verifyEmail() {

}

export function verifyCharacteristics() {

}
