import React from 'react';
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
  'http://www.orjon.com/images/design/knife.jpg',
  'http://www.orjon.com/images/design/knifePlan.jpg',
  'http://www.orjon.com/images/design/laptopStand.jpg',
  'http://www.orjon.com/images/design/office01.jpg',
  'http://www.orjon.com/images/design/oman.jpg',
  'http://www.orjon.com/images/design/ortBridge.jpg',
  'http://www.orjon.com/images/design/redBull.jpg',
  'http://www.orjon.com/images/design/samsung.jpg',
  'http://www.orjon.com/images/design/powerBuoy.jpg',
  'http://www.orjon.com/images/design/sony.jpg',
  'http://www.orjon.com/images/design/winxo.jpg',
  'http://www.orjon.com/images/design/t2Snooze.jpg',
  'http://www.orjon.com/images/design/vamiziPlan.jpg',
  'http://www.orjon.com/images/design/kite.jpg',
  'http://www.orjon.com/images/design/hermanus.jpg'
]
const designLabels = [
  'Internet of Everything, CiscoLive! 2015 : Milan',
  'Angle Desk',
  'Foreshore Pedestrian Bridge : Cape Town, South Africa',
  'Statoil : Trondheim, Norway',
  'Aspire Lounge : East Midlands Airport',
  'Honestly Good : London, UK',
  'Cisco Campus, CiscoLive! 2016 : Berlin',
  'Cisco Campus, CiscoLive! 2017 : Berlin',
  'Chix : Potchefstroom, South Africa',
  'XLT Chess Set',
  'Bhunga Pedestrian Bridge : Cape Town, South Africa',
  'Fairmont Apartments : Durban, South Africa',
  'Copper & Cement : Task Light',
  'Infiniti : London, UK',
  'Opera House : Manama, Bahrain',
  'Knife: Cape Town, South Africa',
  'Knife: Cape Town, South Africa',
  'Lapstånd: A4 flatpack laptop stand',
  'Office.01 : Reticulated Office Furniture',
  'Al Madina A Zarqa : Oman',
  'O.R.Tambo Airport Pedestrian Bridge : Johannesburg, South Africa',
  'Red Bull : Cape Town, South Africa',
  'Samsung Galaxy Launch : Berlin, Germany',
  'Power Buoy : Floating power generator',
  'Sony Building Signage : Cape Town, South Africa',
  'Winxo HQ Signage : Casablanca, Morocco',
  'Swissport Snooze Lounge : Heathrow Terminal 2',
  'Vamizi Villa Plan : Vamizi Island, Mozambique',
  'Kite Buddy : Motorized kite launching handles',
  'Hermanus Market Stall : Hermanus, South Africa'
]

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
//
// const fadeImages = [
//   'http://www.orjon.com/images/design/cisco2015.jpg',
//   'http://www.orjon.com/images/design/nouTable.jpg',
//   'http://www.orjon.com/images/design/foreshore.jpg',
//   'http://www.orjon.com/images/design/statoil.jpg'
// ];
