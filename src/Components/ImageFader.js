import React from 'react';
import { Fade } from 'react-slideshow-image';
import '../scss/ImageFader.scss'

const fadeImages = [
  'http://www.orjon.com/images/design/cisco2015.jpg',
  'http://www.orjon.com/images/design/nouTable.jpg',
  'http://www.orjon.com/images/design/foreshore.jpg',
  'http://www.orjon.com/images/design/statoil.jpg'
];

const fadeProperties = {
  duration: 5000,
  transitionDuration: 1500,
  infinite: true,
  indicators: false,
  arrows: false,
  onChange: (oldIndex, newIndex) => {
    console.log(`fade transition from ${oldIndex} to ${newIndex}`);
  }
}

const ImageFader = () => {
  return (
    <Fade {...fadeProperties}>
      {fadeImages.map(image => (
        <div className="each-fade">
          <div className="image-container">
            <img src={image} alt=''/>
          </div>
        </div>
      ))}

    </Fade>
  )
}

export default ImageFader;
