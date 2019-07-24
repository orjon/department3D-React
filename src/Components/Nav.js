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
            src='http://www.orjon.com/department3d/images/logo/department3D.png'
            alt='department3D logo'
          />
        </a>
        <div className='navIcons'>
          <NavIcon
            iconId='iconVisualisation'
            link='#Visualisation'
            iconImage='http://www.orjon.com/department3d/images/icons/visualisationA.png'
            iconHover='http://www.orjon.com/department3d/images/icons/visualisationB.png'
            altText='visualisation icon'
          />
          <NavIcon
            iconId='iconDesign'
            link='#Design'
            iconImage='http://www.orjon.com/department3d/images/icons/designA.png'
            iconHover='http://www.orjon.com/department3d/images/icons/designB.png'
            altText='design icon'
          />
          <NavIcon
            iconId='iconPrinting'
            link='#Printing'
            iconImage='http://www.orjon.com/department3d/images/icons/printingA.png'
            iconHover='http://www.orjon.com/department3d/images/icons/printingB.png'
            altText='3D Printing icon'
          />
          <NavIcon
            iconId='iconModels'
            link='#Models'
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
