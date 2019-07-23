import React, { Component } from 'react';
import NavIcon from './NavIcon';
// import { Link } from 'react-router-dom';
import '../scss/Nav.scss';

class Nav extends Component {

  render() {
    return (
      <nav>
        {/* <Link to='/'></Link> */}
        <a href='#Carousel'>
          <img
            className='logo'
            src={require('../images/nav/department3D.png')}
            alt='department3D logo'
          />
        </a>
        <div className='navIcons'>
          <NavIcon
            iconId='iconVisualisation'
            link='#Visualisation'
            iconImage='http://www.orjon.com/dept3d/images/icons/visualisationA.png'
            iconHover='http://www.orjon.com/dept3d/images/icons/visualisationB.png'
            altText='visualisation icon'
          />
          <NavIcon
            iconId='iconDesign'
            link='#Design'
            iconImage='http://www.orjon.com/dept3d/images/icons/Design6A.png'
            iconHover='http://www.orjon.com/dept3d/images/icons/Design6B.png'
            altText='design icon'
          />
          <NavIcon
            iconId='iconPrinting'
            link='#Printing'
            iconImage='http://www.orjon.com/dept3d/images/icons/Printing3A.png'
            iconHover='http://www.orjon.com/dept3d/images/icons/Printing3B.png'
            altText='3D Printing icon'
          />
          <NavIcon
            iconId='iconModels'
            link='#Models'
            iconImage='http://www.orjon.com/dept3d/images/icons/3dModelsA3.png'
            iconHover='http://www.orjon.com/dept3d/images/icons/3dModelsB(cyan).png'
            altText='3D models icon'
          />

        </div>



      </nav>
    );
  }

};

export default Nav;
//
// this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this);
//        this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this);
//    }
//
//    onMouseEnterHandler() {
//        this.setState({
//            isHover: true
//        });
//    }
//
//    onMouseLeaveHandler() {
//        this.setState({
//            isHover: false
//        });
//    }
//
//    render() {
//        return (
//            <div className='app'>
//                <div className='icon' onMouseEnter={this.onMouseEnterHandler} onMouseLeave={this.onMouseLeaveHandler}>
//                    {
//                        this.state.isHover
//                            ? <div>hovered</div>
//                            : <div>some text</div>
//                    }
//                </div>
//            </div>
//        );
//    }
// }


// <img
//   className='navIcon'
//   id='models'
//   src={require('../images/nav/3dModelsA1.png')}
//   alt='navigate to 3D model section icon'
// />
