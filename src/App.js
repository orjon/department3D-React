import React from 'react';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Carousel from './Components/Carousel';
import Service from './Components/Service';
import './scss/App.scss';


function App() {
  return (
    <div className="App">
      <Nav />
      <div id="main">

        <Carousel />
        <Service
          id='Architectural'
          name='Architectural'
          up='#Carousel'
          down='#Models'/>
        <Service
          id='Models'
          name='3D Models'
          up='#Architectural'
          down='#Product'/>
        <Service
          id='Product'
          name='Product'
          up='#Models'
          down='#Technical'/>
        <Service
          id='Technical'
          name='Technical'
          up='#Product'/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
      // <Nav />
