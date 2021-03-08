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

