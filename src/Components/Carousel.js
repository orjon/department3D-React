import React, { Component } from 'react';
import '../scss/Carousel.scss'

class Carousel extends Component {
  render() {
    return(
      <div id='Carousel'>
        <div className='links'>
          <br/>
          <h1><a href='#Architectural'>Architectural</a></h1>
          <h1><a href='#Models'>Events</a></h1>
          <h1><a href='#Product'>Product</a></h1>
          <h1><a href='#Technical'>Technical</a></h1>
        </div>
      </div>
    )

  }
}

export default Carousel;
