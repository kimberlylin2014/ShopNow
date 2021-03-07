import React from 'react';
import styles from './sortBy.css';

class SortBy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortByValue: 'relevance',
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(e) {
    const { toggleSortBy } = this.props;
    const { sortByValue } = this.state;
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    }, () => {
      toggleSortBy(sortByValue);
    });
  }

  render() {
    const { totalReviews } = this.props;
    return (
      <div className={styles.sortBy}>
        <form>
          <label htmlFor="sortList" ><span className={styles.sortByLabel}>{totalReviews ? totalReviews : null} reviews</span>, sorted by: </label>
          <select name="sortByValue" id="sortList" onChange={this.handleSelect} value={this.state.sortByValue} className={styles.sortBySelect}>
            <option value="relevance">Relevance</option>
            <option value="helpful"> Helpful</option>
            <option value="newest">Newest</option>
          </select>
        </form>
      </div>
    );
  }
};

export default SortBy;