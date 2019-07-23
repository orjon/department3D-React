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
  }

  mouseHover() {
      this.setState({
          iconHovered: true
      });
  }

  mouseOut() {
      this.setState({
          iconHovered: false
      });
  }

  render() {
    return (
      <div
        className='navIcon'
        onMouseEnter={this.mouseHover}
        onMouseLeave={this.mouseOut}>
        { this.state.iconHovered
          ? <a href={this.props.link}>
              <img
              href={this.props.link}
              id={this.props.iconId}
              alt={this.props.altText}
              src={this.props.iconHover}
              />
            </a>
          : <a href={this.props.link}>
              <img
              id={this.props.iconId}
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
