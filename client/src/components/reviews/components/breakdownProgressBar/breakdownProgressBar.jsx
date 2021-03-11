import React from 'react';
import styles from './breakdownProgressBar.css';
const BreakdownProgressBar = ({label, box, data}) => {
  const styleObj = {
    display: 'none',
    marginLeft: '5%',
  };
  if (data[box]) {
    styleObj.display = 'block';
    styleObj.marginLeft = data.marginLeft;
  }
  return (
    <div className={styles.breakdownProgressBar}>
      <div className={styles.breakdownProgressBarFrame}>
        <img src="icons/arrow-point-to-down.png" className={styles.progressBar} style={styleObj} alt="upside-down-triangle" />
      </div>
      <div className={styles.breakdownProgressBarLabel}>
        {label}
      </div>
    </div>
  )

};

export default BreakdownProgressBar;