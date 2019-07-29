import React, { Component } from 'react';
import { Fade } from 'react-slideshow-image';
import '../scss/ImageFader.scss'

const fadeImages = [
  'http://www.orjon.com/images/design/cisco2015.jpg',
  'http://www.orjon.com/images/design/nouTable.jpg',
  'http://www.orjon.com/images/design/foreshore.jpg',
  'http://www.orjon.com/images/design/statoil.jpg',
  'http://www.orjon.com/images/design/emidlands.jpg',
  'http://www.orjon.com/images/design/honestlyGood.jpg',
  'http://www.orjon.com/images/design/cisco2016.jpg',
  'http://www.orjon.com/images/design/cisco2017.jpg',
  'http://www.orjon.com/images/design/chix.jpg',
  'http://www.orjon.com/images/design/chess.jpg',
  'http://www.orjon.com/images/design/bhunga.jpg',
  'http://www.orjon.com/images/design/fairmont.jpg',
  'http://www.orjon.com/images/design/ho1.jpg',
  'http://www.orjon.com/images/design/infiniti.jpg',
  'http://www.orjon.com/images/design/operaHouse.jpg',
  'http://www.orjon.com/images/design/laptopStand.jpg',
  'http://www.orjon.com/images/design/office01.jpg',
  'http://www.orjon.com/images/design/oman.jpg',
  'http://www.orjon.com/images/design/ortBridge.jpg',
  'http://www.orjon.com/images/design/redBull.jpg',
  'http://www.orjon.com/images/design/samsung.jpg',
  'http://www.orjon.com/images/design/sony.jpg',
  'http://www.orjon.com/images/design/winxo.jpg',
  'http://www.orjon.com/images/design/t2Snooze.jpg',
  'http://www.orjon.com/images/design/vamiziPlan.jpg',
  'http://www.orjon.com/images/design/kite.jpg',
  'http://www.orjon.com/images/design/hermanus.jpg'
]

const fadeProperties = {
  duration: 5000,
  transitionDuration: 1500,
  infinite: true,
  indicators: false,
  arrows: false,
  onChange: (oldIndex, newIndex) => {
    // console.log(`fade transition from ${oldIndex} to ${newIndex}`);
  }
}


class ImageFader extends Component {
  render() {
    return (
      <Fade {...fadeProperties}
        setActiveImage={this.props.setActiveImage}>
        {fadeImages.map(image => (
          <div className='each-fade'>
            <div className='image-container'>
              <img src={image} alt=''/>
              <div className='imageLabel'>{this.props.activeImageLabel}</div>
            </div>
          </div>
        ))}

      </Fade>
    )
  }
}

// const ImageFader = () => {
//   return (
//     <Fade {...fadeProperties}
//     setActiveImage={this.props.setActiveImage}>
//       {fadeImages.map(image => (
//         <div className='each-fade'>
//           <div className='image-container'>
//             <img src={image} alt=''/>
//             <div className='imageLabel'>temp</div>
//           </div>
//         </div>
//       ))}
//
//     </Fade>
//   )
// }

export default ImageFader;


//
// const fadeImages = [
//   'http://www.orjon.com/images/design/cisco2015.jpg',
//   'http://www.orjon.com/images/design/nouTable.jpg',
//   'http://www.orjon.com/images/design/foreshore.jpg',
//   'http://www.orjon.com/images/design/statoil.jpg'
// ];
