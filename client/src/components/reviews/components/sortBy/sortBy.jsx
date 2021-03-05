import React from 'react';

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
      <form>
        <label htmlFor="sortList">{totalReviews ? totalReviews : null} reviews, sorted by:</label>
        <select name="sortByValue" id="sortList" onChange={this.handleSelect} value={this.state.sortByValue}>
          <option value="relevance">Relevance</option>
          <option value="helpful">Helpful</option>
          <option value="newest">Newest</option>
        </select>
      </form>
    )
  }
};

export default SortBy;