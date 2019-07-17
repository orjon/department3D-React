import React from 'react';
import MenuBar from './Components/MenuBar';
import Carousel from './Components/Carousel';
import Service from './Components/Service';
import './scss/App.scss';


function App() {
  return (
    <div className="App">
      <MenuBar />
      <div id="main">
        <Carousel />
        <Service className='Architectural' name='Architectural' />
        <Service className='ThreeD' name='3D Models'/>
        <Service className='Product' name='Product'/>
        <Service className='Technical' name='Technical'/>
      </div>
    </div>
  );
}

export default App;
