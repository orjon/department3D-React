import React, { Component } from 'react';
import '../scss/Service.scss'

class ServiceImage extends Component {
  constructor(props){
    super(props)
    this.state= {
      imageNumber: 0,
    }
  }


  render() {
    // const autoIncrementSpeed = 5000
    //
    // let imageNo = 0
    // let autoForward = true
    // let designImagePlayer = setInterval(autoIncrementImage, autoIncrementSpeed)
    //
    // if (!autoForward) {
    //   clearInterval(designImagePlayer)
    // }

    const images = [
        'http://www.orjon.com/images/design/cisco2015.jpg',
        'http://www.orjon.com/images/design/nouTable.jpg',
        'http://www.orjon.com/images/design/foreshore.jpg',
        'http://www.orjon.com/images/design/statoil.jpg'
      ]
      const designLabels = [
        'Internet of Everything, CiscoLive! 2015 : Milan',
        'Angle Desk',
        'Foreshore Pedestrian Bridge : Cape Town, South Africa',
        'Statoil : Trondheim, Norway'
      ]

      const designTechs = [
        'Layout, Design, Visualisation, Technical Documentation, On-Site : AutoCAD, 3ds Max, V-Ray, Photoshop',
        'Design, Visualisation, Technical Documentation : 3ds Max, V-Ray, Photoshop',
        'Design, Visualisation, Technical Documentation : AutoCAD, SketchUp, 3ds Max, Mental Ray, Photoshop',
        'Layout, Design, Visualisation : 3ds Max, V-Ray, Photoshop'
      ]

      // function autoIncrementImage() {
      //   $('#designImage').fadeTo('slow', 0, function() {
      //     imageNo++
      //     if (imageNo >= (designImages.length)) {
      //       imageNo= 0
      //     }
      //     designImageLabel.innerHTML=designLabels[imageNo]
      //     designImageTech.innerHTML=designTechs[imageNo]
      //     $(this).css('background-image', 'url(' + designImages[imageNo] + ')')
      //   }).fadeTo('slow', 1)
      // }

    return(
      <div id='slideShowImage'>

      </div>
    )

  }
}

export default ServiceImage;
// <img src={images[this.state.imageNumber]} alt=''/>
