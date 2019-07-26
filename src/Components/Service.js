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
