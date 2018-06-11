import React, { Component } from 'react';
import image2 from './images/image2.jpg';
import tictactoe_screenshot from './images/tictactoe_screenshot.png';
import image3 from './images/image3.jpg';
import pupfetcher_screenshot2 from './images/pupfetcher_screenshot2.png';
import image1 from './images/image1.jpg';
import ufhome_screenshot4 from './images/ufhome_screenshot4.png';
import './Home.css';


class Home extends Component {
  render() {
    return (
      <div className="Home">
        
        <div className="FSWD">
          <button className='leftButton' onClick='rotate(-1)'>&#10094</button>
          Full Stack Web Developer
          <button className='rightButton' onClick='rotate(1)'>&#10095</button>
        </div>
        <div className="imageSelectorSection">
          <div className='slideshowSection'>
            <div>
              <div className='item'><a href="./about.html"><img className='image1' src={image2}/></a></div>
              <div className='item'><a href="./projects.html"><img className='image2' src={tictactoe_screenshot}/></a></div>
              <div className='item'><a href="./about.html"><img className='image3' src={image3}/></a></div>
              <div className='item'><a href="./projects.html"><img className='image4' src={pupfetcher_screenshot2}/></a></div>
              <div className='item'><a href="./about.html"><img className='image5' src={image1}/></a></div>
              <div className='item'><a href="./projects.html"><img className='image6' src={ufhome_screenshot4}/></a></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}



export default Home
