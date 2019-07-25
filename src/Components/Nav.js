import React, { Component } from 'react';
import NavIcon from './NavIcon';
// import { Link } from 'react-router-dom';
import '../scss/Nav.scss';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.mouseDown = this.mouseDown.bind(this);
  }

  mouseDown() {
    this.props.setActiveSection('Carousel')
  }

  render() {
    return (
      <nav>
        {/* <Link to='/'></Link> */}
        <a href='#Carousel'>
          <img
            onClick={this.mouseDown}
            className='logo'
            src='http://www.orjon.com/department3d/images/logo/department3D.png'
            alt='department3D logo'
          />
        </a>
        <div className='navIcons'>
          <NavIcon
            section='Visualisation'
            activeSection={this.props.activeSection}
            setActiveSection={this.props.setActiveSection}
            iconImage='http://www.orjon.com/department3d/images/icons/visualisationA.png'
            iconHover='http://www.orjon.com/department3d/images/icons/visualisationB.png'
            altText='visualisation icon'
          />
          <NavIcon
            section='Design'
            activeSection={this.props.activeSection}
            setActiveSection={this.props.setActiveSection}
            iconImage='http://www.orjon.com/department3d/images/icons/designA.png'
            iconHover='http://www.orjon.com/department3d/images/icons/designB.png'
            altText='design icon'
          />
          <NavIcon
            section='Printing'
            activeSection={this.props.activeSection}
            setActiveSection={this.props.setActiveSection}
            iconImage='http://www.orjon.com/department3d/images/icons/printingA.png'
            iconHover='http://www.orjon.com/department3d/images/icons/printingB.png'
            altText='3D Printing icon'
          />
          <NavIcon
            section='Models'
            activeSection={this.props.activeSection}
            setActiveSection={this.props.setActiveSection}
            iconImage='http://www.orjon.com/department3d/images/icons/modelsA.png'
            iconHover='http://www.orjon.com/department3d/images/icons/modelsB2.png'
            altText='3D models icon'
          />

        </div>
      </nav>
    );
  }

};

export default Nav;
