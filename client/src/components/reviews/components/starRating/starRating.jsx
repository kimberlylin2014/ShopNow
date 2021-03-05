import React from 'react';
import Star from '../star/star.jsx';
import styles from './starRating.css';

const rating = {
  star1: 1,
  star2: 2,
  star3: 3,
  star4: 4,
  star5: 5,
};

class StarRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      star1: '/stars/emptyStar.png',
      star2: '/stars/emptyStar.png',
      star3: '/stars/emptyStar.png',
      star4: '/stars/emptyStar.png',
      star5: '/stars/emptyStar.png',
      persist: false,
      opacity: 0.5,
    }
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleMouseEnter(e) {
    e.stopPropagation();
    const {id} = e.target.dataset;
    if (id === 'star1') {
      this.setState({
        star1: '/stars/filledStar.png',
        persist: false,
        opacity: 0.5,
      });
    } else if (id === 'star2') {
      this.setState({
        star1: '/stars/filledStar.png',
        star2: '/stars/filledStar.png',
        persist: false,
        opacity: 0.5,
      });
    } else if (id === 'star3') {
      this.setState({
        star1: '/stars/filledStar.png',
        star2: '/stars/filledStar.png',
        star3: '/stars/filledStar.png',
        persist: false,
        opacity: 0.6,
      });
    } else if (id === 'star4') {
      this.setState({
        star1: '/stars/filledStar.png',
        star2: '/stars/filledStar.png',
        star3: '/stars/filledStar.png',
        star4: '/stars/filledStar.png',
        persist: false,
        opacity: 0.5,
      });
    } else if (id === 'star5') {
      this.setState({
        star1: '/stars/filledStar.png',
        star2: '/stars/filledStar.png',
        star3: '/stars/filledStar.png',
        star4: '/stars/filledStar.png',
        star5: '/stars/filledStar.png',
        persist: false,
        opacity: 0.5,
      });
    }
  }

  handleMouseLeave(e) {
    e.stopPropagation();
    if (this.state.persist === false) {
      this.setState({
        star1: '/stars/emptyStar.png',
        star2: '/stars/emptyStar.png',
        star3: '/stars/emptyStar.png',
        star4: '/stars/emptyStar.png',
        star5: '/stars/emptyStar.png',
      });
    } else {
      // this.setState({
      //   persist: false,
      // });
    }
  }

  handleOnClick(e) {
    e.stopPropagation();
    const {id} = e.target.dataset;
    console.log(id)
    if (id === 'star1') {
      this.setState({
        star1: '/stars/filledStar.png',
        persist: true,
        opacity: 1,
      });
    } else if (id === 'star2') {
      this.setState({
        star1: '/stars/filledStar.png',
        star2: '/stars/filledStar.png',
        persist: true,
        opacity: 1,
      });
    } else if (id === 'star3') {
      this.setState({
        star1: '/stars/filledStar.png',
        star2: '/stars/filledStar.png',
        star3: '/stars/filledStar.png',
        persist: true,
        opacity: 1,
      });
    } else if (id === 'star4') {
      this.setState({
        star1: '/stars/filledStar.png',
        star2: '/stars/filledStar.png',
        star3: '/stars/filledStar.png',
        star4: '/stars/filledStar.png',
        persist: true,
        opacity: 1,
      });
    } else if (id === 'star5') {
      this.setState({
        star1: '/stars/filledStar.png',
        star2: '/stars/filledStar.png',
        star3: '/stars/filledStar.png',
        star4: '/stars/filledStar.png',
        star5: '/stars/filledStar.png',
        persist: true,
        opacity: 1,
      });
    }
  }

  render() {
    const {star1, star2, star3, star4, star5, opacity } = this.state;
    return (
      <div className={styles.starRating}>
        <Star id="1" handleMouseEnter={this.handleMouseEnter} opacity={opacity} star={star1} handleMouseLeave={this.handleMouseLeave} handleOnClick={this.handleOnClick}/>
        <Star id="2" handleMouseEnter={this.handleMouseEnter} opacity={opacity} star={star2} handleMouseLeave={this.handleMouseLeave} handleOnClick={this.handleOnClick}/>
        <Star id="3" handleMouseEnter={this.handleMouseEnter} opacity={opacity} star={star3} handleMouseLeave={this.handleMouseLeave} handleOnClick={this.handleOnClick}/>
        <Star id="4" handleMouseEnter={this.handleMouseEnter} opacity={opacity} star={star4} handleMouseLeave={this.handleMouseLeave} handleOnClick={this.handleOnClick}/>
        <Star id="5" handleMouseEnter={this.handleMouseEnter} opacity={opacity} star={star5} handleMouseLeave={this.handleMouseLeave} handleOnClick={this.handleOnClick}/>
      </div>
    )
  }
}

export default StarRating;
