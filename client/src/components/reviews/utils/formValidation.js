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

export function verifyRating(rating) {
  if (typeof rating === 'number' && rating >= 1 && rating <= 5) {
    return true;
  }
  return false;
}

export function verifyRecommendation(rec) {
  if (typeof rec === 'boolean') {
    return true;
  }
  return false;
}

export function verifySummary(summary) {
  if (typeof summary === 'string' && summary.length <= 60 && summary.length > 0) {
    return true;
  }
  return false;
}

export function verifyReviewBody(body) {
  if (typeof body === 'string' && body.length >= 50 && body.length <= 1000) {
    return true;
  }
  return false;
}

export function verifyUsername(username) {
  if (typeof username === 'string' && username.length <= 60 && username.length > 0) {
    return true;
  }
  return false;
}

export function verifyEmail(email) {
  if (typeof email === 'string' && email.length <= 60 && email.length > 0) {
    return true;
  }
  return false;
}

export function verifyCharacteristics(characteristics, metaReview) {
  const charObj = createCharacteristicState(metaReview);
  const charObjLength = Object.keys(charObj).length;
  const targetCharObjLength = Object.keys(characteristics).length;

  if (charObjLength !== targetCharObjLength) {
    return false;
  }
  return true;
}

export function formIsValidated(formState, metaReview) {
  const { rating, recommend, characteristics, summary, body, name, email} = formState;
  const validatedResult = {
    rating: verifyRating(rating),
    recommendation: verifyRecommendation(recommend),
    summary: verifySummary(summary),
    review: verifyReviewBody(body),
    name: verifyUsername(name),
    email: verifyEmail(email),
    characteristics: verifyCharacteristics(characteristics, metaReview)
  };
 return validatedResult;
}