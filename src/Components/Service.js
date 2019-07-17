import React, { Component } from 'react';
import '../scss/Service.scss'

class Service extends Component {
  render() {
    return(
      <div className={this.props.className}>
        <h1>{this.props.name}</h1>
      </div>
    )

  }
}

export default Service;
