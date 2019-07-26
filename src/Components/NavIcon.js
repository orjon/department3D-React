import React, { Component } from 'react';
import '../scss/Nav.scss';

class NavIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iconHovered: false,
    }
    this.mouseHover = this.mouseHover.bind(this);
    this.mouseOut = this.mouseOut.bind(this);
    this.mouseDown = this.mouseDown.bind(this);
  }


  mouseHover() {
    this.setState({iconHovered: true});
  }

  mouseDown() {
    this.props.setActiveSection(this.props.section)
  }

  mouseOut() {
    this.setState({iconHovered: false});
  }

  render() {
    return (
      <div
        className='navIcon'
        onMouseEnter={this.mouseHover}
        onMouseLeave={this.mouseOut}
        onClick={this.mouseDown}>
        { this.state.iconHovered ||
          (this.props.activeSection === this.props.section)
          ? <a href={`#${this.props.section}`}>
              <img
              id={`nav${this.props.section}`}
              alt={this.props.altText}
              src={this.props.iconHover}
              />
            </a>
          : <a href={this.props.link}>
              <img

              alt={this.props.altText}
              src={this.props.iconImage}
              />
            </a>
        }
      </div>
    )
  }
};

export default NavIcon;
