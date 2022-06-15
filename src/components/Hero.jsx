import React from 'react';
import './Hero.css';
import IMG1 from '../images/hero_image.jpg';

const Hero = () => {
  return (
    <div className='container'>
      <div className='image_container'>
        <img src={IMG1} alt="IMG1"/>
      </div>
    </div>
  )
};

export default Hero;