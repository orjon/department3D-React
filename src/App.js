import React, { Component } from 'react';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Carousel from './Components/Carousel';
import Service from './Components/Service';
import './scss/App.scss';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeImage: 0,
      activeSection: 'Carousel'
    }
    this.setActiveSection = this.setActiveSection.bind(this);
    this.setActiveImage = this.setActiveImage.bind(this);
  }


  setActiveSection(activeSection) {
    this.setState({activeSection: activeSection});
  }

  setActiveImage(activeImage) {
    this.setState({activeImage: activeImage});
  }




  render() {
    return (
      <div className='App'>
        <Nav
          activeSection={this.state.activeSection}
          setActiveSection={this.setActiveSection}/>
        <div id='main'>

          <Carousel
            setActiveImage={this.setActiveImage}/>
          <Service
            id='Visualisation'
            layout='layoutLeft'
            name='Visualisation'
            description='3D rendering services for architects & designers'/>
          <Service
            id='Design'
            layout='layoutRight'
            name='Design'
            description='Conceptual and technical design'/>
          <Service
            id='Printing'
            layout='layoutLeft'
            name='3D Printing'
            description='FDM rapid protoyping'/>
          <Service
            id='Models'
            layout='layoutRight'
            name='3D Models'
            description='3D files of popular event venues'/>
        </div>
        <Footer />
      </div>
    );
  }
}


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

export default App;

///scroll things.

// class MyComponent extends React.Component {
//   handleScroll = e => {
//     let element = e.target
//     if (element.scrollHeight - element.scrollTop === element.clientHeight) {
//       // do something at end of scroll
//     }
//   }
//   render() {
//     return (
//       <div className="content-container" onScroll={this.handleScroll}>
//         // Your content
//       </div>
//     )
//   }
// }
