import React, { Component } from 'react';

import '../scss/Service.scss'

class Service extends Component {
  render() {
    return(
      <div
        id={this.props.id}
        className={this.props.layout}>
        <div className='serviceDescription'>
          <h1>{this.props.name}</h1>
          <p>{this.props.description}</p>
        </div>
        <div className='serviceImage'> </div>
      </div>
    )

  }
}

export default Service;

// <div className='navArrows'>
//   <a href={this.props.up}>
//     <img className='navArrowUp' src={require('../icons/icon-arrow.png')} alt='navigate up arrow' />
//   </a>
//   {this.props.down && <a href={this.props.down}>
//     <img className='navArrowDown' src={require('../icons/icon-arrow.png')} alt='navigate down arrow' />
//   </a>}
// </div>
