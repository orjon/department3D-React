import React from 'react';
import MenuBar from './Components/MenuBar';
import Carousel from './Components/Carousel';
import Service from './Components/Service';
import './scss/App.scss';


function App() {
  return (
    <div className="App">
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
      <MenuBar />
    </div>
  );
}

export default App;
