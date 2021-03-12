/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable no-restricted-syntax */
import React from 'react';
// import PropTypes from 'prop-types';
import styles from './comparisonStyle.css';

class Comparison extends React.Component {
  constructor() {
    super();
    this.escFunction = this.escFunction.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.escFunction, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.escFunction, false);
  }

  escFunction(event) {
    if (event.keyCode === 27) {
      this.closeModal();
    }
  }

  closeModal() {
    const { toggleModal } = this.props;
    toggleModal();
  }

  render() {
    const { current, selected } = this.props;
    const features = {};
    for (const item of current.features) {
      const feat = item.feature;
      features[feat] = {
        currentVal: item.value || '✔️',
        selectedVal: '',
      };
    }
    for (const item of selected.features) {
      const feat = item.feature;
      if (features[feat]) {
        features[feat].selectedVal = item.value;
      } else {
        features[feat] = {
          currentVal: '',
          selectedVal: item.value || '✔️',
        }
      }
    }
    return (
      <div className={styles.background} onClick={() => this.closeModal()}>
        <div className={styles.modal}>
          <div className={styles.heading}>COMPARING</div>
          <div className={styles.header}>
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

// Comparison.propTypes = {
//   current: PropTypes.isRequired,
//   selected: PropTypes.isRequired,
// };

export default Comparison;
