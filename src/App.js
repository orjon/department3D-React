import React from 'react';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Carousel from './Components/Carousel';
import Service from './Components/Service';
import './scss/App.scss';


function App() {
  return (
    <div className='App'>
      <Nav />
      <div id='main'>

        <Carousel />
        <Service
          id='Visualisation'
          name='Visualisation'
          description='3D rendering services for architects & designers'/>
        <Service
          id='Design'
          name='Design'
          description='Conceptual and technical design'/>
        <Service
          id='Printing'
          name='3D Printing'
          description='FDM rapid protoyping'/>
        <Service
          id='Models'
          name='3D Models'
          description='3D files of popular event venues'/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
      // <Nav />
