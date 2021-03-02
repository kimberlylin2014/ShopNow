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
    // create array of features that includes all from current + all from selected
    // include indication of which have feature
    return (
      <div className={styles.background} onClick={() => this.closeModal()}>
        <div className={styles.modal}>
          <div className={styles.heading}>
            <div>{current.name}</div>
            <div>{selected.name}</div>
          </div>
          <div className={styles.table}>
            {/* <div>{current.features}</div>
            <div>{selected.features}</div> */}
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