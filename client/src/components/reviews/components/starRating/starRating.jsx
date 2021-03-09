import React from 'react';
import Star from '../star/star.jsx';
import styles from './starRating.css';
import FormValidationMessage from '../formValidationMessage/formValidationMessage.jsx';

const rating = {
  star1: {rating: 1, descrip: 'Poor'},
  star2: {rating: 2, descrip: 'Fair'},
  star3: {rating: 3, descrip: 'Average'},
  star4: {rating: 4, descrip: 'Good'},
  star5: {rating: 5, descrip: 'Great'},
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
      selected: ''
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
        selected: `1 Star: ${rating['star1'].descrip}`,
      });
    } else if (id === 'star2') {
      this.setState({
        star1: '/stars/filledStar.png',
        star2: '/stars/filledStar.png',
        persist: false,
        opacity: 0.5,
        selected: `2 Stars: ${rating['star2'].descrip}`,
      });
    } else if (id === 'star3') {
      this.setState({
        star1: '/stars/filledStar.png',
        star2: '/stars/filledStar.png',
        star3: '/stars/filledStar.png',
        persist: false,
        opacity: 0.6,
        selected: `3 Stars: ${rating['star3'].descrip}`,
      });
    } else if (id === 'star4') {
      this.setState({
        star1: '/stars/filledStar.png',
        star2: '/stars/filledStar.png',
        star3: '/stars/filledStar.png',
        star4: '/stars/filledStar.png',
        persist: false,
        opacity: 0.5,
        selected: `4 Stars: ${rating['star4'].descrip}`,
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
        selected: `5 Stars: ${rating['star5'].descrip}`,
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
        selected: '',
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
    const { handleStarRatingClick } = this.props;

    this.setState({
      star1: '/stars/emptyStar.png',
      star2: '/stars/emptyStar.png',
      star3: '/stars/emptyStar.png',
      star4: '/stars/emptyStar.png',
      star5: '/stars/emptyStar.png',
      persist: false,
    }, () => {
      if (id === 'star1') {
        // handleStarRatingClick(id);
        handleStarRatingClick(rating['star1'].rating)
        this.setState({
          star1: '/stars/filledStar.png',
          persist: true,
          opacity: 1,
          selected: `1 Star: ${rating['star1'].descrip}`,
        });
      } else if (id === 'star2') {
        handleStarRatingClick(rating['star2'].rating)
        this.setState({
          star1: '/stars/filledStar.png',
          star2: '/stars/filledStar.png',
          persist: true,
          opacity: 1,
          selected: `2 Stars: ${rating['star2'].descrip}`,
        });
      } else if (id === 'star3') {
        handleStarRatingClick(rating['star3'].rating)
        this.setState({
          star1: '/stars/filledStar.png',
          star2: '/stars/filledStar.png',
          star3: '/stars/filledStar.png',
          persist: true,
          opacity: 1,
          selected: `3 Stars: ${rating['star3'].descrip}`,
        });
      } else if (id === 'star4') {
        handleStarRatingClick(rating['star4'].rating)
        this.setState({
          star1: '/stars/filledStar.png',
          star2: '/stars/filledStar.png',
          star3: '/stars/filledStar.png',
          star4: '/stars/filledStar.png',
          persist: true,
          opacity: 1,
          selected: `4 Stars: ${rating['star4'].descrip}`,
        });
      } else if (id === 'star5') {
        handleStarRatingClick(rating['star5'].rating)
        this.setState({
          star1: '/stars/filledStar.png',
          star2: '/stars/filledStar.png',
          star3: '/stars/filledStar.png',
          star4: '/stars/filledStar.png',
          star5: '/stars/filledStar.png',
          persist: true,
          opacity: 1,
          selected: `5 Stars: ${rating['star5'].descrip}`,
        });
      }
    });
  }

  render() {
    const {star1, star2, star3, star4, star5, opacity, selected } = this.state;
    return (
      <div className={styles.starRatingSection}>
        <div className={styles.starRating}>
          <span className={styles.requiredField}>Click on Star to Rate:</span>
          <Star id="1" handleMouseEnter={this.handleMouseEnter} opacity={opacity} star={star1} handleMouseLeave={this.handleMouseLeave} handleOnClick={this.handleOnClick}/>
          <Star id="2" handleMouseEnter={this.handleMouseEnter} opacity={opacity} star={star2} handleMouseLeave={this.handleMouseLeave} handleOnClick={this.handleOnClick}/>
          <Star id="3" handleMouseEnter={this.handleMouseEnter} opacity={opacity} star={star3} handleMouseLeave={this.handleMouseLeave} handleOnClick={this.handleOnClick}/>
          <Star id="4" handleMouseEnter={this.handleMouseEnter} opacity={opacity} star={star4} handleMouseLeave={this.handleMouseLeave} handleOnClick={this.handleOnClick}/>
          <Star id="5" handleMouseEnter={this.handleMouseEnter} opacity={opacity} star={star5} handleMouseLeave={this.handleMouseLeave} handleOnClick={this.handleOnClick}/>
        </div>
        <div className={styles.selectedMessage}>
          <FormValidationMessage text={selected}/>
        </div>
      </div>
    )
  }
}

export default StarRating;
