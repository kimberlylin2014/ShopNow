/* eslint-disable no-restricted-syntax */
import React from 'react';
import styles from './comparisonStyle.css';
import PropTypes from 'prop-types';

class Comparison extends React.Component {
  constructor() {
    super();
  }

  closeModal() {
    this.props.toggleModal();
  }

  render() {
    const { current, selected } = this.props;
    console.log(current.features);
    console.log(selected.features);
    const features = {};
    for (let item of current.features) {
      let feat = item.feature;
      features[feat] = {
        currentVal: item.value || '✔️',
        selectedVal: ''
      }
    }
    for (let item of selected.features) {
      let feat = item.feature;
      if (features[feat]) {
        features[feat].selectedVal = item.value;
      } else {
        features[feat] = {
          currentVal: '',
          selectedVal: item.value || '✔️'
        }
      }
    }
    console.log(features);
    // create array of features that includes all from current + all from selected
    // include indication of which have feature
    return (
      <div className={styles.background} onClick={() => this.closeModal()}>
        <div className={styles.modal}>
          <div className={styles.header}>
            <div className={styles.heading}>COMPARING</div>
            <div className={styles.current}>{current.name}</div>
            <div className={styles.selected}>{selected.name}</div>
          </div>
          <div className={styles.table}>
            {Object.keys(features).map((key) => (
              <div className={styles.featureRow}>
                <div className={styles.currentColumn}>{features[key].currentVal}</div>
                <div className={styles.featureColumn}>{key}</div>
                <div className={styles.selectedColumn}>{features[key].selectedVal}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

Comparison.propTypes = {
  current: PropTypes.isRequired,
  selected: PropTypes.isRequired,
};

export default Comparison;