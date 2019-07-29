import React, { Component } from 'react';
import ImageFader from './ImageFader';
import '../scss/Carousel.scss'

class Carousel extends Component {
  render() {
    return(
      <div id='Carousel'>
        <ImageFader setActiveImage={this.props.setActiveImage}/>
      </div>
    )

  }
}

export default Carousel;

        // <div className='imageLabel'>{this.props.activeImageLabel}</div>
