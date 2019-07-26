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


// <div className='links'>
//   <br/>
//   <h1><a href='#Architectural'>Architectural</a></h1>
//   <h1><a href='#Models'>3D Models</a></h1>
//   <h1><a href='#Product'>Product</a></h1>
//   <h1><a href='#Technical'>Technical</a></h1>
// </div>
