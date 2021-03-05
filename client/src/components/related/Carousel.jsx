import React from 'react';
import styles from './carouselStyle.css';

class Carousel extends React.Component {
  constructor() {
    super();
    this.state = {
      currentImageIndex: 0,
      cards: [],
    };
    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
    this.loadCards = this.loadCards.bind(this);
  }

  componentDidMount() {
    const { cards } = this.props;
    this.loadCards(cards);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.cards !== this.props.cards) {
      const { cards } = this.props;
      this.loadCards(cards);
    }
  }

  loadCards(cards) {
    this.setState({ cards });
  }

  prevSlide() {
    const lastIndex = this.state.cards.length - 1;

    const resetIndex = this.state.currentImageIndex === 0;
    const index = resetIndex ? lastIndex: this.state.currentImageIndex - 1;

    this.setState({ currentImageIndex: index });
  }

  nextSlide() {
    const lastIndex = this.state.cards.length - 1;

    const resetIndex = this.state.currentImageIndex === lastIndex;
    const index = resetIndex ? 0 : this.state.currentImageIndex + 1;

    this.setState({ currentImageIndex: index });
  }

  render() {
    const index = this.state.currentImageIndex;

    /*
    let firstFiveVideo = this.state.cards.slice(index, index + 5);

    if (firstFiveVideo.length < 5) {
      firstFiveVideo = firstFiveVideo.concat(this.state.cards.slice(0, 5 - firstFiveVideo.length));
    }
    */
    return (
      <div>
        <img src="icons/leftArrow.png" onClick={this.prevSlide} className={styles.leftArrow} alt="leftArrow"/>
        {this.state.cards.map((card, index) =>
          <span key={index}>{card}</span>
        )}
        <img src="icons/rightArrow.png" onClick={this.nextSlide} className={styles.rightArrow} alt="rightArrow"/>
      </div>
    );
  }

}

export default Carousel;