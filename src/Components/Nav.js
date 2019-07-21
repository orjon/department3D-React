import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "../scss/Nav.scss";

class Nav extends Component {
  render() {
    return (
      <nav>
        {/* <Link to='/'></Link> */}
        <div className='menus'>
          {/* <img
            className='dotMenu'
            src={require("../images/nav/navDotMenu.png")}
            alt='department3D logo'
          /> */}

          <div className='navIcons'>
            <img
              className='navIcon'
              id='design'
              src={require("../images/nav/navDesignOFF.png")}
              alt='navigate to design setion icon'
            />
            <img
              className='navIcon'
              id='models'
              src={require("../images/nav/navModelsOFF.png")}
              alt='navigate to 3D model section icon'
            />
            <img
              className='navIcon'
              id='about'
              src={require("../images/nav/navFaceOFF.png")}
              alt='navigate to About section icon'
            />
          </div>
        </div>
        <img
          className='logo'
          src={require("../images/nav/department3D.png")}
          alt='department3D logo'
        />


      </nav>
    );
  }

};

export default Nav;


// Architectural : interior & exterior
// Event
// Product
// 3D Models
// 3D Printing
//
