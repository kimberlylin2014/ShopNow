import React from 'react';
import Styles from './Modal.css';

const { Component } = React;

class ZoomImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundImage: `url(${this.props.src})`,
      backgroundPosition: '0% 0%',
    };
    this.handleMouseMove = this.handleMouseMove.bind(this);
  }

  handleMouseMove(e) {
    const {
      left, top, width, height,
    } = e.target.getBoundingClientRect();
    const x = (e.pageX - left) / width * 100;
    const y = (e.pageY - top) / height * 100;
    this.setState({ backgroundPosition: `${x}% ${y}%` });
  }

  render() {
    return (
      <figure onMouseMove={this.handleMouseMove} style={this.state} id={Styles.ZoomImageFigure}>
        <img src={this.props.src} id={Styles.ZoomImage}/>
      </figure>
    );
  }
}

export default ZoomImage;
