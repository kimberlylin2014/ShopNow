import React from 'react';

class SortBy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortByValue: 'relevance'
    }
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(e) {
    const {name, value} = e.target;
    this.setState({
      [name]: value,
    })
  }

  render() {
    return (
      <form>
        <label htmlFor="sortList">248 reviews, sorted by:</label>
        <select name="sortByValue" id="sortList" onChange={this.handleSelect} value={this.stateByValue}>
          <option value="relevance">Relevance</option>
          <option value="Helpful">Helpful</option>
          <option value="Newest">Newest</option>
        </select>
      </form>
    )
  }
};

export default SortBy;